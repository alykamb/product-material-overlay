import {
	modal
} from '../modal';

import baseImage from './baseImage';
import categories from './categories';
import gallery from './gallery';
import overlayImages from './overlayImages';

export default function ($) {
	if ($('#pms_gallery').length) {		
		categories($);
		gallery($);
		// ---------------- OVERLAY IMAGES ---------------- //
		overlayImages($, window[modal]);
		// ---------------- BASE IMAGE ---------------- //
		baseImage($, window[modal]);
	}	
}