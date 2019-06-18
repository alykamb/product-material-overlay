<?php 
	// global $post;
	// global $categories;
	// global $base_image_id;
	// global $base_image;
	
	function pms_image_view_func( $atts ){
		global $post;
		global $categories;
		global $base_image_id;
		global $base_image;
		global $selected_images;

		// if(!isset($selected_images)) {
		// 	$selected_images = array();
		// }

		$images = get_post_meta($post->ID, 'pms_images', true);

		if(!$post) {
			$post = get_post();
		}
		if(!$categories) {
			$categories = get_post_meta($post->ID, 'pms_categories', true);
		}

		
		if($categories) {
			$cats = array_map("mapCategory", $categories);
		}

		if($images && $cats) {
			for ($i=0; $i < count($cats); $i++) { 
				$cats[$i]['images']= array();		
				foreach ($images as $image) {
					if($image['category'] == $cats[$i]['name']) {					
						array_push($cats[$i]['images'], $image);
					}
				}
			}
		}

		if(!$base_image) {
			if(!$base_image_id) {
				$base_image_id = get_post_meta($post->ID, 'pms_base_image', true);
			}
			if($base_image_id) {
				$base_image = array(
					src => wp_get_attachment_url($base_image_id ),
					id => $base_image_id
				);
			}
		}

		$queries = array();
		parse_str($_SERVER['QUERY_STRING'], $queries);
		foreach ($queries as $key => $value) {
			foreach($cats as $cat) {
				if($cat['name'] !== $key) {
					continue;
				}
				foreach($cat['images'] as $img) {
					if($img['name'] === $value) {
						$selected_images[$cat['name']] = $img;
						continue;
					}
				}
			}
		}
		ob_start();
		?>
		<div id="pms-image">
			<div class="gallery-image-wrapper">
				<img class="gallery-image" src="" alt="">
			</div>
			<?php foreach($cats as $cat):?>
				<?php 
					if(!$selected_images[$cat['name']]) {
						$selected_images[$cat['name']] = $cat['images'][rand ( 0 , sizeof($cat['images'])-1 )];	
					}
				?>
				<img class="image-<?= $cat['name']?>" src="<?= $selected_images[$cat['name']]['src']?>" alt="">
			<?php endforeach;?>
			<img class="base-image" src="<?= $base_image['src'] ?>" alt="">			
		</div>
		<?php
		return ob_get_clean();
	}
	add_shortcode( 'pms_image_view', 'pms_image_view_func' );

	function mapCategory($c) {
		$c = array(
			name => $c,
		);

		return $c;
	}

	function pms_material_selection_func( $atts ){
		global $post;
		global $categories;
		global $base_image_id;
		global $base_image;
		global $gallery;
		global $selected_images;
	

		$images = get_post_meta($post->ID, 'pms_images', true);
		
		if(!$post) {
			$post = get_post();
		}

		if(!$categories) {
			$categories = get_post_meta($post->ID, 'pms_categories', true);		
		}
		
		if($categories) {
			$cats = array_map("mapCategory", $categories);
		}
		
		if(!$gallery) {
			$gallery = get_post_meta($post->ID, 'pms_gallery', true);					
		}

		if($images && $cats) {
			for ($i=0; $i < count($cats); $i++) { 
				$cats[$i]['images']= array();		
				foreach ($images as $img) {
					if($img['category'] == $cats[$i]['name']) {					
						array_push($cats[$i]['images'], $img);
					}
				}
			}
		}

		if(!$base_image) {
			if(!$base_image_id) {
				$base_image_id = get_post_meta($post->ID, 'pms_base_image', true);
			}
			if($base_image_id) {
				$base_image = array(
					src => wp_get_attachment_url($base_image_id ),
					id => $base_image_id
				);
			}
		}
		
		ob_start();
		?>
		<div id="pms-material-selection">
			<?php foreach($cats as $cat):?>
				<?php if(sizeof($cat['images'])>0): ?>
				<div class="cat">
					<h4><?= $cat['name']?></h4>
					<div class="thumbnails">
						<?php foreach($cat['images'] as $img):?>
							<div class="thumb-wrapper">
								<span><?= $img['name'] ?></span>
								<button class="thumbnail  <?= $selected_images[$cat['name']]['src'] == $img['src'] ? 'selected' : '' ?>" data-cat="<?= $cat['name'] ?>" data-src="<?= $img['src'] ?>" data-name="<?= $img['name'] ?>">
									<img src="<?= $img['thumbnail']?>" alt="">
								</button>
							</div>
						<?php endforeach;?>
					</div>
				</div>
				<?php endif; ?>
			<?php endforeach;?>
		</div>
		<?php
		return ob_get_clean();
	}
	add_shortcode( 'pms_material_selection', 'pms_material_selection_func' );

	function pms_gallery_selection_func( $atts ){
		global $post;
		global $gallery;		

		if(!$gallery) {
			$gallery = get_post_meta($post->ID, 'pms_gallery', true);					
		}

		if(!$base_image) {
			if(!$base_image_id) {
				$base_image_id = get_post_meta($post->ID, 'pms_base_image', true);
			}
			if($base_image_id) {
				$base_image = array(
					src => wp_get_attachment_url($base_image_id ),
					id => $base_image_id
				);
			}
		}
		
		ob_start();
		?>
		<div id="pms-gallery-selection">
			<button class="gallery-thumb selected" data-base="true"><img src="<?= $base_image['src']?>" alt=""></button>
			<?php foreach ($gallery as $g_img): ?>
				<button class="gallery-thumb"><img src="<?= $g_img['src']?>" alt=""></button>
			<?php endforeach; ?>	
		</div>
		<?php
		return ob_get_clean();
	}
	add_shortcode( 'pms_gallery_selection', 'pms_gallery_selection_func' );
