import { FC } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { Keyframes } from "@emotion/serialize";
export interface RevealProps {
    /**
     * Stagger its children animations.
     * @default false
     */
    cascade?: boolean;
    /**
     * Factor that affects the delay that each animated element in a cascade animation will be assigned.
     * @default 0.5
     */
    damping?: number;
    /**
     * Initial delay, in milliseconds.
     * @default 0
     */
    delay?: number;
    /**
     * Animation duration, in milliseconds.
     * @default 1000
     */
    duration?: number;
    /**
     * Float number between 0 and 1 indicating how much the element should be in viewport before the animation is triggered.
     * @default 0
     */
    fraction?: number;
    /**
     * Custom Emotion animation keyframes.
     */
    keyframes?: Keyframes;
    /**
     * Specifies if the animation should run only once or everytime the element enters/exits/re-enters the viewport.
     * @default false
     */
    triggerOnce?: boolean;
    /**
     * Custom Emotion styles.
     */
    css?: Interpolation<Theme>;
    /**
     * Class names to add to the container element.
     */
    className?: string;
    /**
     * Inline styles to add to the container element.
     */
    style?: React.CSSProperties;
    /**
     * Class names to add to the child element.
     */
    childClassName?: string;
    /**
     * Inline styles to add to the child element.
     */
    childStyle?: React.CSSProperties;
    /**
     * Callback executed when the element enters or leaves the viewport.
     * If more than one element is being animated, this function is called
     * on each element.
     *
     * @param inView The current visibility flag.
     * @param entry The current IntersectionObserverEntry.
     */
    onVisibilityChange?(inView: boolean, entry: IntersectionObserverEntry): void;
}
declare const Reveal: FC<RevealProps>;
export default Reveal;