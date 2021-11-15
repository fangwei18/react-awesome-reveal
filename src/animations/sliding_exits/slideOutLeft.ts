import { keyframes } from "@emotion/react";
import {getDistance} from "../../utils/distance";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_exits/slideOutLeft.css}
 */
const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-${getDistance()}, 0, 0);
  }
`;

export default slideOutLeft;
