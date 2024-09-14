import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftTriangleLight = ({
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
      d="M9 13.619h6m-6 0 2.349 2.34M9 13.62l2.349-2.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.004 20.1H4.996c-1.529 0-2.489-1.65-1.732-2.98l6.96-12.214c.762-1.338 2.689-1.343 3.458-.01l7.048 12.216c.767 1.329-.192 2.989-1.726 2.989"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftTriangleLight;
