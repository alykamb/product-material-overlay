export const getImageFromMedia = (id, multiple=false) => {
	return new Promise((resolve, reject) => {
		const file_frame = wp.media.frames.file_frame = wp.media({
			title: 'Selecione uma imagem',
			library: {
				type: 'image' // limits the frame to show only images
			},
			multiple // Set to true to allow multiple files to be selected
		});

		if(id) {
			wp.media.model.settings.post.id = id;
		}

		file_frame.open();

		file_frame.on('cancel', () => reject());

		file_frame.on('select', () => {
			if(multiple) {
				return resolve(file_frame.state().get('selection').toJSON());
			}
			return resolve(file_frame.state().get('selection').first().toJSON());
		});
	});
};