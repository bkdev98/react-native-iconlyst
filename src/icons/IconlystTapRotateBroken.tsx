import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotateBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.543 20.995c-1.753-.142-3.55-.81-4.754-1.829-1.353-1.144-2.67-2.726-3.446-3.719a1.84 1.84 0 0 1-.168-1.979 1.93 1.93 0 0 1 3.074-.489l.995.985a.633.633 0 0 0 1.06-.289l2.473-9.437a1.655 1.655 0 0 1 3.206.816L14.961 9.21c2.183.802 5.456 1.537 5.72 4.218.266 2.698-1.484 5.718-3.499 6.894M7.809 3.727l1.96.828-.825 1.949M3.292 7.938l.58 2.042 2.04-.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.883 9.988c.712-2.21 2.62-4.463 5.88-5.441"
    />
  </Svg>
);
export default IconlystTapRotateBroken;
