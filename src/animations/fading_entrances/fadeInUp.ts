import { keyframes } from "@emotion/react";
import {getDistance} from "../../utils/distance";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInUp.css}
 */
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, ${getDistance()}, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default fadeInUp;
