import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar7TwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M17.687 10.025h-3.36L12.25 3.633l-2.077 6.392h-6.72l5.437 3.95-1.039 3.196"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M17.687 10.025h3.36l-5.437 3.95 2.077 6.392-5.437-3.95-5.437 3.95 1.038-3.196"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStar7TwoTonesharp;
