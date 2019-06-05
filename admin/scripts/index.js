import '../styles/index.scss';
import options from './options';
import gallery from './gallery';
import modalfunc, {modal} from './modal';

jQuery(document).ready(($) => {
	const Modal = modalfunc($);
	window[modal] = new Modal();
	gallery($);
	options($);	
});