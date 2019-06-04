<?php 
	if(isset($_POST['submit'])) {
		if (isset($_POST['posttype'])) {
			$value = $_POST['posttype'];
			update_option('pms_posttype', $value);
		} else {
			delete_option('pms_posttype');
		}
		
		if(isset($_POST['category'])) {
			$value = $_POST['category'];
			update_option('pms_img-category', $value);
		} else {
			delete_option('pms_img-category');
		}

		if(isset($_POST['gallery'])) {
			$value = $_POST['gallery'];
			update_option('pms_img-gallery', true);
		} else {
			delete_option('pms_img-gallery');
		}
	}	

	$args = array(
   'public'   => true
	);
	$output = 'objects';

	$post_types = get_post_types( $args, $output ); 	

	$value = get_option('pms_posttype', []);
	$categories = get_option('pms_img-category', []);
	$gallery = get_option('pms_img-gallery', null);
?>

<div id="pms">
	<h1>Seleção de Materiais de Produtos</h1>

	<form method="POST" class="pms_options-form">
			<label>Habilitar para os seguintes tipos de post:</label><br>
			<?php 
				foreach ($post_types as $post_type) {
					?>
						<input type="checkbox" name="posttype[]" id="posttype-<?= $post_type->name ?>" value="<?= $post_type->name ?>" <?= in_array($post_type->name, $value) ?  'checked' : '' ?>> 
						<label for="posttype-<?= $post_type->name ?>"><?= $post_type->label ?></label>
						<br>
					<?php
				}
			?>
			<br>
			<h3>Categorias Padrão:</h3><br>
			<div class="pms_categories">
				<?php 
					foreach ($categories as $category) {
						?>						
							<div class="cat">
								<div class="handle"><span class="dashicons dashicons-sort"></span></div>
								<input type="text" name="category[]" id="category-<?= $category ?>" value="<?= $category ?>"> 
								<button class="remove"  type="button"><span class="dashicons dashicons-trash"></span></button>
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
			<br>
			<br>
			<h3>Outras opções:</h3><br>
			<label for="gallery">Possui galeria normal?</label>
			<input type="checkbox" name="gallery" id="gallery" value="true" <?= $gallery ?  'checked' : '' ?>> 
			<br>
			<br>
			<input type="submit" value="Salvar" name="submit" class="button button-primary button-large">
	</form>
</div>