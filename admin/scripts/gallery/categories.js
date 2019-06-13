export default function($) {
	const newCat = $('#new-category');

	const addCategory = (category) => {
		const element = `
			<div class="cat toggled-container cat-${category}">
				<div class="topbar">
					<input type="hidden" name="categories[]" value="${category}">
					<div class="handle"><span class="dashicons dashicons-sort"></div>
					<p class="label"><b>${category}</b></p>		
					<div class="remove-wrapper">
						<button class="remove"  type="button"><span class="dashicons dashicons-trash"></span></button>
					</div>	
				</div>
				<div class="content">
					<div class="images">
						<p><i>Nenhuma imagem cadastrada</i></p>
					</div>
					<button class="button add-image" data-cat="${category}">Adicionar Imagem</button>
				</div>
			</div>`;
		$('.overlay-gallery .categories').append(element);
	};

	newCat.on('blur keydown', e => {
		const {
			value
		} = e.target;
		console.log(value, value.length)
		if ((!e.which || e.which == 13) && value && value.length > 0) {
			e.preventDefault()
			addCategory(value);
			e.target.value = '';
		}
	});

	$('.categories').sortable({
		handle: ".handle"
	});

	$('.categories').on('click', '.remove', function () {
		$(this).parents('.cat').remove();
	});
}