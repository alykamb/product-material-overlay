import {
	getImageFromMedia
} from './helpers';

export default function($, modal) {
	$('.choose-base-image').on('click', async function(e) {
		e.preventDefault();
		const id = $('#base-image').val();
		
		const image = await getImageFromMedia(id);
		// console.log()
		$('.overlay-gallery .base .image img').attr('src', image.url);
		$('#base-image').val(image.id);
	})
}