<?php

function pms_admin_menu() {
	add_menu_page( 
		'Produtos PMS', 
		'Produtos PMS', 
		'manage_options', 
		'pms', 
		'product_menu', 
		'dashicons-screenoptions',
		69
	);
}

add_action( 'admin_menu', 'pms_admin_menu' );

function product_menu() {
	wp_enqueue_script( 'jquery-ui-sortable' );

	include 'options-form.php';
}

function add_gallery()
{	
	$post_types = get_option('pms_posttype', array());

	add_meta_box(
		'pms_gallery',           // Unique ID
		'Galeria do Produto',  // Box title
		'gallery_content',  // Content callback, must be of type callable
		$post_types,                  // Post type
		'normal',
		'high'
	);
	
}

function gallery_content($post) {
	wp_enqueue_media();
	wp_enqueue_script( 'jquery-ui-sortable' );

	include 'gallery.php';
}

add_action('add_meta_boxes', 'add_gallery');

function pms_admin_enqueue_scripts() {  
		wp_register_style( 'pms_admin_style', plugins_url() . '/product-material-selection' . '/admin/style.css', false);
		wp_enqueue_style( 'pms_admin_style' );

    wp_enqueue_script( 'pms_admin_script', plugins_url() . '/product-material-selection' . '/admin/script.js' );
}
add_action( 'admin_enqueue_scripts', 'pms_admin_enqueue_scripts' );

function pms_enqueue_scropts() {
		wp_register_style( 'pms_client_style', plugins_url() . '/product-material-selection' . '/client/style.css', false);
		wp_enqueue_style( 'pms_client_style' );

    wp_enqueue_script( 'pms_client_script', plugins_url() . '/product-material-selection' . '/client/script.js' );
}
add_action( 'wp_enqueue_scripts', 'pms_enqueue_scropts' );

function save_pms_meta( $post_id, $post, $update ) {

    /*
     * In production code, $slug should be set only once in the plugin,
     * preferably as a class property, rather than in each function that needs it.
     */
		$post_type = get_post_type($post_id);
		$post_types = get_option('pms_posttype', array());

		
		// var_dump('a5fe', $post_type, $post_types, $post, $update);
    // // If this isn't a 'book' post, don't update it.
		// if ( "book" != $post_type ) return;
		if(in_array($post_type, $post_types) &&  isset($_POST['pms_gallery_form'])) {
			if ( isset( $_POST['base-image'] ) ) {
				update_post_meta($post_id, 'pms_base_image', sanitize_text_field( $_POST['base-image']));
			} else {
				delete_post_meta($post_id, 'pms_base_image');
			}

			if ( isset( $_POST['categories'] ) ) {
				update_post_meta($post_id, 'pms_categories', $_POST['categories']);
			} else {
				update_post_meta($post_id, 'pms_categories', array());
			}

			$images = array();
			for ($i=0; $i < count($_POST['images-name']); $i++) { 
				$images[$i] = array(
					name => $_POST['images-name'][$i],
					src => $_POST['images-src'][$i],
					category => $_POST['images-category'][$i],
					thumbnail => $_POST['images-thumbnail'][$i]
				);
			}

			if ( count($images) > 0 ) {
				update_post_meta($post_id, 'pms_images', $images);
			} else {
				delete_post_meta($post_id, 'pms_images');
			}

			$gallery = array();
			for ($i=0; $i < count($_POST['gallery-src']); $i++) { 
				$gallery[$i] = array(					
					src => $_POST['gallery-src'][$i],
					id => $_POST['gallery-id'][$i],
				);
			}

			if ( count($gallery) > 0 ) {
				update_post_meta($post_id, 'pms_gallery', $gallery);
			} else {
				delete_post_meta($post_id, 'pms_gallery');
			}
		}
}
add_action( 'save_post', 'save_pms_meta', 10, 3 );


