import {
	getImageFromMedia
} from './helpers';

export default function($) {
	const newGalleryImage = (image) => {
		const img = $(`
			<div class="image">
				<img src="${image.url}" alt="">
				<button class="gallery-item-remove">
					<span class="dashicons dashicons-trash"></span>
				</button>
				<input type="hidden" name="gallery-src[]" value="${image.url}">
				<input type="hidden" name="gallery-id[]" value="${image.id}">
			</div>
		`);

		$('.gallery-images').append(img);
	}

	$('.add-gallery-images').on('click', async (e) => {
		e.preventDefault();
		e.stopPropagation();

		const images = await getImageFromMedia(null, true);

		images.forEach(image => newGalleryImage(image));
	})

	$('.gallery').on('click', '.image .gallery-item-remove', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$(this).parent().remove();
	})
}