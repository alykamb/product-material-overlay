<div>
	<h1>Seleção de Materiais de Produtos</h1>

	<form method="POST">
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
			<input type="submit" value="Salvar" class="button button-primary button-large">
	</form>
</div>