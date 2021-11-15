import { keyframes } from "@emotion/react";
import {getDistance} from "../../utils/distance";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutRight.css}
 */
const fadeOutRight = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(${getDistance()}, 0, 0);
  }
`;

export default fadeOutRight;
