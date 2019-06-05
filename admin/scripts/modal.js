export const modal = Symbol();

export default function ($) {
	return class Modal {
		constructor() {
			this.modal = $(`
				<div class="pms-modal hidden">
					<div class="overlay">
					</div>
					<div class="content">
					</div>				
				</div>
			`);

			$(this.modal.children()[0]).on('click', () => this.closeModal());
			$('body').append(this.modal);
		}

		openModal(content) {
			console.log(this.modal.children());
			if(content) {
				$(this.modal.children()[1]).html(content);
			}

			this.modal.removeClass('hidden');
			$('body').addClass('modal-open');
		}

		closeModal() {
			this.modal.addClass('hidden');
			$('body').removeClass('modal-open');
		}
	};
}
