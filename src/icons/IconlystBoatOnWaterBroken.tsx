import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoatOnWaterBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 20.133c.508-.369.95-.787 1.952-.787 1.79 0 1.791 1.336 3.58 1.336s1.792-1.336 3.58-1.336c1.791 0 1.791 1.336 3.582 1.336 1.792 0 1.792-1.336 3.584-1.336.85 0 1.296.3 1.722.616M10.69 12.824v-9.01s7.492 3.1 6.996 11.908"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.806 19.522 2.349-3.8h-6.61M5.389 19.347l-1.55-3.625h8.124"
    />
  </Svg>
);
export default IconlystBoatOnWaterBroken;
