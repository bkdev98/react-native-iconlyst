import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.659 2c3.33 0 5.84 2.717 5.84 6.32v6.868c0 1.844-.651 3.51-1.836 4.692-1.063 1.059-2.442 1.62-3.988 1.62H6.822c-1.543 0-2.921-.56-3.985-1.62C1.652 18.698 1 17.032 1 15.188V8.32C1 4.717 3.51 2 6.84 2zm0 1.5H6.84C4.326 3.5 2.5 5.527 2.5 8.32v6.868c0 1.443.496 2.732 1.396 3.629C4.672 19.592 5.685 20 6.825 20h9.834c.002-.002.01 0 .016 0 1.14 0 2.153-.408 2.929-1.183.9-.897 1.396-2.186 1.396-3.629V8.32c0-2.793-1.826-4.82-4.341-4.82m1.576 4.629a.75.75 0 0 1-.11 1.055l-4.443 3.612a3.042 3.042 0 0 1-3.799.006L5.398 9.186a.751.751 0 0 1 .94-1.168l4.482 3.612a1.544 1.544 0 0 0 1.923-.004l4.436-3.606a.75.75 0 0 1 1.056.109"
    />
  </Svg>
);
export default IconlystMessageOutline;
