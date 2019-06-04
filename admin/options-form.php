<?php 
	if(isset($_POST['submit'])) {
		if (isset($_POST['posttype'])) {
			$value = $_POST['posttype'];
			update_option('pms-posttype', $value);
		} else {
			delete_option('pms-posttype');
		}
		
		if(isset($_POST['category'])) {
			$value = $_POST['category'];
			update_option('pms-img-category', $value);
		} else {
			delete_option('pms-img-category');
		}
	}	

	$args = array(
   'public'   => true
	);
	$output = 'objects';

	$post_types = get_post_types( $args, $output ); 	

	$value = get_option('pms-posttype', []);
	$categories = get_option('pms-img-category', []);
?>

<div>
	<h1>Seleção de Materiais de Produtos</h1>

	<form method="POST" class="pms-options-form">
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
			<label>Categorias Padrão:</label><br>
			<div class="pms-categories">
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
				<button class="save" type="button" id="new-cat-button"><span class="dashicons dashicons-yes"></span></button>
			</div>
			<br>
			<br>
			<input type="submit" value="Salvar" name="submit" class="button button-primary button-large">
	</form>
</div>