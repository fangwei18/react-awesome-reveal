# Props

This section covers the props you can pass to any exported animation component to customize its behavior.

## `cascade`

If set, each child of a reveal animation automatically get assigned a delay that takes into account their predecessors, so that the _nth_ child enters the viewport after _n_ milliseconds – useful for animating list items.

:::note

This prop is affected by [damping](#damping).

:::

### Values {#cascade-values}

`boolean` | `undefined`

### Default {#cascade-default}

`false`

## `damping`

Factor that affects the delay that each animated component in a cascade animation will be assigned. If damping = 1 then the delay will be equal to the animation duration; if damping < 1 then the delay will be lower than the animation duration; if damping > 1 then the delay will be greater than the animation duration.

### Values {#damping-values}

`number` | `undefined`

### Default {#damping-default}

`0.5` (meaning that the delay will be half of the animation duration)

## `direction`

Origin of the animation (where applicable).

### Values {#direction-values}

Usually `"down"` | `"left"` | `"right"` | `"up"` (with some exceptions documented in the code) | `undefined`

### Default {#direction-default}

`undefined` (fallbacks to the particular component default direction, documented in the code)

## `delay`

Time to wait before the animation starts (in milliseconds).

### Values {#delay-values}

`number` | `undefined`

### Default {#delay-default}

`0`

## `duration`

The animation duration (in milliseconds).

### Values {#duration-values}

`number` | `undefined`

### Default {#duration-default}

`1000`

## `fraction`

How much an element should be in viewport before the animation is triggered.

### Values {#fraction-values}

`number` between `0` and `1` | `undefined`

### Default {#fraction-default}

`0`

## `triggerOnce`

Specifies if the animation should run only once or everytime an element enters/exits/re-enters the viewport.

### Values {#triggeronce-values}

`boolean` | `undefined`

### Default {#triggeronce-default}

`false`

## `className`

The class name to add to the container element.

### Values {#classname-values}

`string` | `undefined`

### Default {#classname-default}

`undefined`

## `style`

The inline styles to add to the container element.

### Values {#style-values}

`React.CSSProperties` | `undefined`

### Default {#style-default}

`undefined`

## `childClassName`

The class names to add to the child element.

### Values {#childclassname-values}

`string` | `undefined`

### Default {#childclassname-default}

`undefined`

## `childStyle`

The inline styles to add to the child element.

### Values {#childstyle-values}

`React.CSSProperties` | `undefined`

### Default {#childstyle-default}

## `onVisibilityChange`

Callback executed when the element enters or leaves the viewport. If more than one element is being animated, this function is called on each element.

:::note

This prop is affected by [fraction](#fraction).

:::

### Values {#onvisibilitychange-values}

`(inView: boolean, entry: IntersectionObserverEntry) => void` | `undefined`

### Default {#onvisibilitychange-default}

`undefined`
