<?php
	$default_categories = get_option('pms_img-category', []);
	// var_dump($post);
	$hasGallery = get_post_meta($post->ID, 'pms_has-gallery', true);
	$gallery = get_post_meta($post->ID, 'pms_gallery', true);
	$categories = get_post_meta($post->ID, 'pms_categories', true);
	$images = get_post_meta($post->ID, 'pms_images', true);

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
		return array(
			name => $c,
			enabled => true
		);
	}

	$cats = array_map("mapCategory", $default_categories);
	if($categories) {
		$cats = $categories;
	}

?>

<div id="pms">
	<div class="overlay-gallery">
		<div class="categories">
			<?php 
				foreach ($cats as $cat) {
					?>
					<div class="cat toggled-container">
						<div class="topbar">
							<div class="handle"><span class="dashicons dashicons-sort"></div>
							<p class="label">
								<b>
									<?= $cat['name'] ?>
								</b>
							</p>
							<div class="remove-wrapper">
								<button class="remove"  type="button"><span class="dashicons dashicons-trash"></span></button>
							</div>
							<div class="toggler-wrapper">
								<input type="checkbox" class="toggler" name="cat-enabled[]" value="<?= $cat['name'] ?>" <?= $cat['enabled'] ? 'checked' : '' ?> >
							</div>
						</div>
						<div class="content <?= !$cat['enabled'] ? 'hidden' : '' ?>">
							<button class="button" class="add-image" data-cat="<?= $cat['name'] ?>">Adicionar Imagem</button>
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
	<!-- <div class='image-preview-wrapper'>
		<img id='image-preview' src='' width='100' height='100' style='max-height: 100px; width: 100px;'>
	</div>
	<input id="upload_image_button" type="button" class="button" value="<?php _e( 'Upload image' ); ?>" />
	<input type='hidden' name='image_attachment_id' id='image_attachment_id' value=''> -->
</div>