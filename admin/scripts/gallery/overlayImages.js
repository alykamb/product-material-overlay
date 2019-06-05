import {
	getImageFromMedia
} from './helpers';

export default function ($, modal) {
	const showImagesModal = (onSave) => {
		const images = {};
		const modalContent = $(`
				<div class="pms-content-wrapper">
					<div class="topbar">
						<h3>Selecione as imagens:</h3>
						<p><small>Thumbnail é a imagem pequena com o material. A imagem grande que sobrepõe a base na galeria é o botão "Selecionar Imagem"</small></p>
					</div>
					<div className="name">
						<label for="material-name"><b>Nome do material:</b></label><br/>
						<input type="text" id="material-name"/>
					</div>
					<div class="images-wrapper">
						<div class="thumbnail">
							<img src="" alt="">
							<button class="button add-thumbnail">Escolher Thumbnail</button>
						</div>
						<div class="image">
							<img src="" alt="">
							<button class="button add-image">Escolher Imagem</button>
						</div>
					</div>
					<div class="options">
						<button class="button cancel">Cancelar</button>
						<button class="button accept">Salvar</button>
					</div>
				</div>
			`);

		modalContent.find('button').on('click', e => e.preventDefault());

		modalContent.find('.add-image').on('click', async () => {
			const attachment = await getImageFromMedia();
			modalContent.find('.image img').attr('src', attachment.url);
			images.image = attachment;

		});

		modalContent.find('.add-thumbnail').on('click', async () => {
			const attachment = await getImageFromMedia();
			modalContent.find('.thumbnail img').attr('src', attachment.url);
			images.thumbnail = attachment;
		});

		modalContent.find('.accept').on('click', () => {
			images.name = modalContent.find('#material-name').val();
			onSave(images);
		});

		modalContent.find('.cancel').on('click', () => {
			modal.closeModal();
		});

		return modalContent;
	};

	const addImage = (cat, images) => {
		const img = $(`
			<div class="image">
				<div class="title">
					<span><b>${images.name}</b></span>
				</div>
				<div class="thumbnail-wrapper">
					<img src="${images.thumbnail.url}" alt="">
				</div>
				<div class="image-wrapper">
					<img src="${images.image.url}" alt="">
				</div>
				<input type="hidden" name="images-name[]" value="${images.name}">
				<input type="hidden" name="images-src[]" value="${images.image.url}">
				<input type="hidden" name="images-category[]" value="${cat}">
				<input type="hidden" name="images-thumbnail[]" value="${images.thumbnail.url}">				
				<button class="remove-item">
					<span class="dashicons dashicons-trash"></span>
				</button>			
			</div>
		`);
		$(`.cat-${cat} .content .images > p`).remove();
		$(`.cat-${cat} .content .images`).append(img);
	};

	$('.categories .images').on('click', '.remove-item', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		$(this).parent().remove();
	});

	$('.categories').on('click', '.add-image', function (e) {
		e.preventDefault();
		e.stopPropagation();

		const cat = $(this).data('cat');
		modal.openModal(showImagesModal((images) => {
			modal.closeModal();
			addImage(cat, images);
		}));
	});
}