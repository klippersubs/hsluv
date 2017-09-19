import { hsluvToHex, hsluvToRgb, hpluvToHex, hpluvToRgb } from 'hsluv';

export const hsluv = (h, s, l, a) => {
    if (typeof a !== 'number') {
        return hsluvToHex([h, s, l]);
    } else {
        return `rgba(${hsluvToRgb([h, s, l])
            .map(x => Math.floor(x * 0xff))
            .join(',')},${a})`;
    }
};

export const hpluv = (h, s, l, a) => {
    if (typeof a !== 'number') {
        return hpluvToHex([h, s, l]);
    } else {
        return `rgba(${hpluvToRgb([h, s, l])
            .map(x => Math.floor(x * 0xff))
            .join(',')},${a})`;
    }
};

export const hsl = hsluv;
export const hpl = hpluv;

export default hsluv;
