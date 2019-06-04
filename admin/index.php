<?php

add_menu_page( 
	'Produtos PMS', 
	'Produtos PMS', 
	'manage_options', 
	'pms', 
	'product_menu', 
	'dashicons-screenoptions',
	69
);

function product_menu() {
	wp_enqueue_script( 'jquery-ui-sortable' );

	include 'options-form.php';
}

function add_gallery()
{	
	$screens = get_option('pms_posttype', []);

	add_meta_box(
		'pms_gallery',           // Unique ID
		'Galeria do Produto',  // Box title
		'gallery_content',  // Content callback, must be of type callable
		$screens,                  // Post type
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

function pms_enqueue_scripts() {  
		wp_register_style( 'pms_admin_style', plugins_url() . '/product-material-selection' . '/admin/style.css', false);
		wp_enqueue_style( 'pms_admin_style' );

    wp_enqueue_script( 'pms_admin_script', plugins_url() . '/product-material-selection' . '/admin/script.js' );
}
add_action( 'admin_enqueue_scripts', 'pms_enqueue_scripts' );
