export default function($) {
	if ($('#pms_gallery').length) {

		const newCat = $('#new-category');
		
		const addCategory = (category) => {
			const element = `
			<div class="cat toggled-container">
			<div class="topbar">
			<div class="handle"><span class="dashicons dashicons-sort"></div>
			<p class="label">
			<b>
			${category}
			</b>
			</p>
			<div class="toggler-wrapper">
			<input type="checkbox" class="toggler" name="cat" checked >
			</div>
			</div>
			<div class="content">
			<button class="button" class="add-image" data-cat="${category}">Adicionar Imagem</button>
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

		$('.categories').on('click', ' .remove', function () {
			$(this).parents('.cat').remove();
		});
		
	}
// 	var file_frame;
// 	var wp_media_post_id = wp.media.model.settings.post.id; // Store the old id
// 	// var set_to_post_id = < ? php echo $my_saved_attachment_post_id; ? > ; // Set this
// 	$('#upload_image_button').on('click', function (event) {
// 		event.preventDefault();
// 		// If the media frame already exists, reopen it.
// 		if (file_frame) {
// 			// Set the post ID to what we want
// 			// file_frame.uploader.uploader.param('post_id', set_to_post_id);
// 			// Open frame
// 			file_frame.open();
// 			return;
// 		} else {
// 			// Set the wp.media post id so the uploader grabs the ID we want when initialised
// 			// wp.media.model.settings.post.id = set_to_post_id;
// 		}
// 		// Create the media frame.
// 		file_frame = wp.media.frames.file_frame = wp.media({
// 			title: 'Select a image to upload',
// 			button: {
// 				text: 'Use this image',
// 			},
// 			multiple: false // Set to true to allow multiple files to be selected
// 		});
// 		// When an image is selected, run a callback.
// 		file_frame.on('select', (args) => {
// 			// console.log(file_frame.state())
// 			// We set multiple to false so only get one image from the uploader
// 			const attachment = file_frame.state().get('selection').first().toJSON();
// 			// Do something with attachment.id and/or attachment.url here
// 			$('#image-preview').attr('src', attachment.url).css('width', 'auto');
// 			$('#image_attachment_id').val(attachment.id);
// 			// Restore the main post ID
// 			// console.log()
// 			wp.media.model.settings.post.id = wp_media_post_id;
// 		});
// 		// Finally, open the modal
// 		file_frame.open();
// 	});
// 	// Restore the main ID when the add media button is pressed
// 	$('a.add_media').on('click', function () {
// 		wp.media.model.settings.post.id = wp_media_post_id;
// 	});
}