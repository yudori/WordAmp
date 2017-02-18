import {
    COLOR_GRAY,
    COLOR_LIGHT_GRAY,
    COLOR_BLACK,
    PRIMARY_COLOR,
    COLOR_LIGHT_BACKGROUND,
} from './values';

const FONT_SIZE = 15;

export default Object.freeze({
    textBox: {
        normal: {
            color: COLOR_BLACK,
            fontSize: FONT_SIZE,
            height: 36,
            padding: 7,
            borderRadius: 4,
            borderColor: COLOR_LIGHT_GRAY,
            borderWidth: 0,
            marginBottom: 5,
        },
        error: {
            color: COLOR_BLACK,
            fontSize: FONT_SIZE,
            height: 36,
            padding: 7,
            borderRadius: 4,
            borderColor: PRIMARY_COLOR,
            borderWidth: 1,
            marginBottom: 5,
        },
        notEditable: {
            fontSize: FONT_SIZE,
            height: 36,
            padding: 7,
            borderRadius: 4,
            borderColor: COLOR_LIGHT_GRAY,
            borderWidth: 1,
            marginBottom: 5,
            color: COLOR_GRAY,
            backgroundColor: COLOR_LIGHT_BACKGROUND,
        },
    },
});
