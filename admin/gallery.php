<?php
	$default_categories = get_option('pms_img-category', []);
	// var_dump($post);
	$hasGallery = get_post_meta($post->ID, 'pms_has-gallery', true);
	$gallery = get_post_meta($post->ID, 'pms_gallery', true);
	$categories = get_post_meta($post->ID, 'pms_categories', true);
	$images = get_post_meta($post->ID, 'pms_images', true);
	$base_image_id = get_post_meta($post->ID, 'pms_base_image', true);



	if($base_image_id) {
		$base_image = array(
			src => wp_get_attachment_url($base_image_id ),
			id => $base_image_id
		);
	}
 	// var_dump(get_post_meta($post->ID, 'pms_base_image', true));
	/**
	 * images should be an array of objects:
	 * {
	 * 	src: string
	 * 	category: string
	 * 	thumbnail: string
	 * }
	 */

	function mapCategory($c)
	{
		$c = array(
			name => $c,
		);

		return $c;
	}

	$cats = array_map("mapCategory", $default_categories);
	if($categories) {
		$cats = array_map("mapCategory", $categories);
	}

	if($images) {
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
		$base_image = array(
			src => '',
			id => ''
		);
	}

?>

<div id="pms">
	<div class="overlay-gallery">
		<div class="base">
			<h3>Imagem base:</h3>
			<div class="image">
				<img src="<?= $base_image['src'] ?>" alt="">
				<input type="hidden" name="base-image" id="base-image" value="<?= $base_image['id'] ?>">
				<button class="button choose-base-image" data-imageid="<?= $base_image['id'] ?>">Escolher Imagem</button>
			</div>
		</div>
		<hr>
		<div class="categories">
			<?php 
				foreach ($cats as $cat) {
					?>
					<div class="cat toggled-container cat-<?= $cat['name']?>">
						<div class="topbar">
							<input type="hidden" name="categories[]" value="<?= $cat['name']?>">
							<div class="handle"><span class="dashicons dashicons-sort"></div>
							<p class="label">
								<b>
									<?= $cat['name'] ?>
								</b>
							</p>
							<div class="remove-wrapper">
								<button class="remove"  type="button"><span class="dashicons dashicons-trash"></span></button>
							</div>						
						</div>
						<div class="content">
							<div class="images">
								<?php if($cat['images']): ?>
									<?php foreach ($cat['images'] as $image): ?>
										<div class="image">
											<div class="title">
												<span><b><?= $image['name']?></b></span>
											</div>
											<div class="thumbnail-wrapper">
												<img src="<?= $image['thumbnail']?>" alt="">
											</div>
											<div class="image-wrapper">
												<img src="<?= $image['src']?>" alt="">
											</div>
											<input type="hidden" name="images-name[]" value="<?= $image['name']?>">
											<input type="hidden" name="images-src[]" value="<?= $image['src']?>">
											<input type="hidden" name="images-category[]" value="<?= $cat['name']?>">
											<input type="hidden" name="images-thumbnail[]" value="<?= $image['thumbnail']?>">											
											<button class="remove-item">
												<span class="dashicons dashicons-trash"></span>
											</button>											
										</div>
									<?php endforeach; ?>
								<?php else: ?>
									<p><i>Nenhuma imagem cadastrada</i></p>
								<?php endif; ?>
							</div>
							<button class="button add-image" data-cat="<?= $cat['name'] ?>">Adicionar Imagem</button>
						</div>
					</div>
				<?php
				}
			?>
		</div>		
		<div class="new-cat-wrapper">
			<label for="new-category">Nova categoria:</label>
			<input type="text" id="new-category"> 
			<button class="button save" type="button" id="new-cat-button"><span class="dashicons dashicons-yes"></span></button>
		</div>
		<!-- <div class="image-wrapper">
			<div class="image-preview"></div>
			<div class="thumbnail"></div>
			<input type="hidden" name="images[]">
			<input type="hidden" name="thumbnails[]">
		</div>
		<div class="common-gallery toggled-container">
			<input type="checkbox" class="toggler">
			<div class="content">
			</div>
		</div> -->
	</div>
	<hr>
	<div class="gallery">
		<h3>Galeria</h3><br>
		<small>Outras imagens do produto, sem sobreposição:</small>
		<div class="gallery-images">
		<?php if($gallery): ?>
			<?php foreach ($gallery as $gImage): ?>
				<div class="image">
					<img src="<?= $gImage['src']?>" alt="">
					<button class="gallery-item-remove">
						<span class="dashicons dashicons-trash"></span>
					</button>
					<input type="hidden" name="gallery-src[]" value="<?= $gImage['src']?>">
					<input type="hidden" name="gallery-id[]" value="<?= $gImage['id']?>">
				</div>
			<?php endforeach; ?>
		<?php endif; ?>
		</div>
		<button class="button add-gallery-images">Adicionar Imagens</button>
	</div>
	<!-- <div class='image-preview-wrapper'>
		<img id='image-preview' src='' width='100' height='100' style='max-height: 100px; width: 100px;'>
	</div>
	<input id="upload_image_button" type="button" class="button" value="<?php _e( 'Upload image' ); ?>" />
	<input type='hidden' name='image_attachment_id' id='image_attachment_id' value=''> -->
</div>