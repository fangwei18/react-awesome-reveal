/// <reference types="react" />
import { RevealProps } from "../Reveal";
interface RollProps extends Omit<RevealProps, "keyframes" | "css"> {
    /**
     * Specifies if the animation should make element(s) disappear.
     * @default false
     */
    reverse?: boolean;
}
declare const Roll: React.FC<RollProps>;
export default Roll;