import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerLeftLight = ({
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
      d="M7.234 10.512a1.63 1.63 0 0 0-2.196-.589 1.63 1.63 0 0 0-.589 2.196l3.303 5.721a6.427 6.427 0 0 0 11.13-6.426l-1.688-2.928A1.166 1.166 0 0 0 15.6 8.06a2.04 2.04 0 0 0-.747 2.787l.035.061"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.016 12.869 12.268 6.37a1.608 1.608 0 1 0-2.785 1.606"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.16 12.619 8.767 6.746a1.607 1.607 0 1 0-2.785 1.606l3.391 5.873M15.683 3l-1.62 1.051 1.05 1.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.063 4.05c1.898.102 4.427.939 5.695 2.914"
    />
  </Svg>
);
export default IconlystFlickerLeftLight;
