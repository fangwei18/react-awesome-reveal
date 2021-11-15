import { keyframes } from "@emotion/react";
import {getDistance} from "../../utils/distance";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/specials/rollIn.css}
 */
const rollIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-${getDistance()}, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default rollIn;
