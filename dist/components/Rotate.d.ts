/// <reference types="react" />
import { RevealProps } from "../Reveal";
declare type RotateDirection = "bottom-left" | "bottom-right" | "top-left" | "top-right";
interface RotateProps extends Omit<RevealProps, "keyframes" | "css"> {
    /**
     * Origin of the animation.
     * @default undefined
     */
    direction?: RotateDirection;
    /**
     * Specifies if the animation should make element(s) disappear.
     * @default false
     */
    reverse?: boolean;
}
declare const Rotate: React.FC<RotateProps>;
export default Rotate;
