import { keyframes } from "@emotion/react";
import {getDistance} from "../../utils/distance";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/specials/rollOut.css}
 */
const rollOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(${getDistance()}, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;

export default rollOut;
