export declare function getAnimationCss({ duration, delay, timingFunction, keyframes, iterationCount }: {
    duration?: number | undefined;
    delay?: number | undefined;
    timingFunction?: string | undefined;
    keyframes?: import("@emotion/serialize").Keyframes | undefined;
    iterationCount?: number | undefined;
}): import("@emotion/utils").SerializedStyles;
