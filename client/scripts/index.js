import '../styles/index.scss';

jQuery(document).ready(($) => {	
	if ($('#pms-material-selection').length) {

		const setMaterial = (cat, src) => {
			if ($('#pms-image').length) {
				$(`.image-${cat}`).attr('src', src);
			}
		}

		const setUrl = () => {
			let query = '';
			$('.thumbnail.selected').each((i, el) => {
				const cat = $(el).data('cat');
				const name = $(el).data('name');
				if (i == 0) {
					query += '?';
				} else {
					query += '&';
				}
				query += `${cat}=${name}`;
			});

			const src = window.location.origin + window.location.pathname;
			history.replaceState(null, document.title, src + query);
		}

		$('.thumbnails').on('click', '.thumbnail:not(.selected)', function(e) {
			const $this = $(this);
			$this.siblings().removeClass('selected');
			$this.addClass('selected');
			if ($this.hasClass('none')) {
				setMaterial($this.data('cat'), '');
			} else {
				setMaterial($this.data('cat'), $this.data('src'));
			}			
			setUrl();
		});

		if(!window.location.search) {
			setUrl();
		}
	}
});