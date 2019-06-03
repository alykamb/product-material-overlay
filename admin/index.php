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

	if (isset($_POST['posttype'])) {
		$value = $_POST['posttype'];
		update_option('pms-posttype', $value);
	}

	$args = array(
   'public'   => true
	);
	$output = 'objects';

	$post_types = get_post_types( $args, $output ); 	

	$value = get_option('pms-posttype', []);

	include 'options-form.php';
}

function add_gallery()
{	
	$screens = get_option('pms-posttype', []);

	add_meta_box(
		'pms-gallery',           // Unique ID
		'Galeria do Produto',  // Box title
		'gallery_content',  // Content callback, must be of type callable
		$screens,                  // Post type
		'normal',
		'high'
	);
	
}

function gallery_content() {
	echo '<h3>Hello There</h3>';
}

add_action('add_meta_boxes', 'add_gallery');