import { hsluvToHex } from 'hsluv';

export default function hsluv(h, s, l) {
    return hsluvToHex([h, s, l]);
}
