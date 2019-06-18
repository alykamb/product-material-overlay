import '../styles/index.scss';

jQuery(document).ready(($) => {	
	const materials = {};
	if ($('#pms-material-selection').length) {

		const setMaterial = (cat, src, name) => {
			if ($('#pms-image').length) {
				materials[cat]=name;
				$(`.image-${cat}`).attr('src', src);
			}
		}

		const setUrl = () => {
			let query = '';
			Object.keys(materials).forEach((k, i) => {
				if (i == 0) {
					query += '?';
				} else {
					query += '&';
				}
				query += `${k}=${materials[k]}`;
			});
			// $('.thumbnail.selected').each((i, el) => {
			// 	const cat = $(el).data('cat');
			// 	const name = $(el).data('name');
			// 	if (i == 0) {
			// 		query += '?';
			// 	} else {
			// 		query += '&';
			// 	}
			// 	query += `${cat}=${name}`;
			// });

			const src = window.location.origin + window.location.pathname;
			history.replaceState(null, document.title, src + query);
		}

		$('.thumbnails').on('click', '.thumbnail:not(.selected)', function() {
			const $this = $(this);
			$this.parents('.thumbnails').find('.thumbnail').removeClass('selected');
			$this.addClass('selected');
			if ($this.hasClass('none')) {
				setMaterial($this.data('cat'), '', '');
			} else {
				setMaterial($this.data('cat'), $this.data('src'), $this.data('name'));
			}			
			setUrl();
		});

		$('.gallery-thumb').on('click', function() {
			const $this = $(this);
			$this.siblings().removeClass('selected');
			$this.addClass('selected');

			if($this.data('base')) {
				$('.gallery-image-wrapper').removeClass('active');
			} else {
				$('.gallery-image-wrapper').addClass('active');
				$('.gallery-image-wrapper .gallery-image').attr('src', $this.children().attr('src'));
			}
		});

		if(!window.location.search) {
			setUrl();
		}
	}
});