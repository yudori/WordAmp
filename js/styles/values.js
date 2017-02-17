/**
 * Dimensions
 */

import {
    Dimensions
} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Full Screen Container
export const CONTAINER_DISTANCE_TOP = 47;
export const CONTAINER_DISTANCE_SIDE = 32;
export const CONTAINER_WIDTH = SCREEN_WIDTH - (CONTAINER_DISTANCE_SIDE * 2);

// Margins/ Paddings
export const DISTANCE_TOP_SMALL = 20;



/**
 * Colours
 */

export const COLOR_WHITE = '#FFFFFF';
export const COLOR_BLACK = '#000000';
export const COLOR_LIGHT_GRAY = '#cccccc';
export const COLOR_GRAY = '#777777';

export const PRIMARY_COLOR = '#A0A0A0';
export const SECONDARY_COLOR = '#E26D5C';
export const COLOR_LIGHT_BACKGROUND = '#3CBC3C';
export const COLOR_TEXT_GRAY = '#A0A0A0';
export const COLOR_TEXT_GREEN = '#3CBC3C';
export const COLOR_TEXT_YELLOW = '#e6d000';

export const PRIMARY_COLOR_GRADIENT = '#ff9170';

export const COLOR_BACKDROP = 'rgba(0, 0, 0, 0.6)';

// Opacities
export const COLOR_BLACK_OPACITY_30 = 'rgba(0, 0, 0, 0.3)';
export const PRIMARY_COLOR_OPACITY_30 = 'rgba(226, 109, 92, 0.3)';


