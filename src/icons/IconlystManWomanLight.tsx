import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManWomanLight = ({
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
      d="M6.926 11.26a3.925 3.925 0 1 1 0 7.85 3.925 3.925 0 0 1 0-7.85m0 0V4.89m2.465 2.476L6.925 4.89 4.458 7.366M17.074 18.868v-6.02m1.962 3.854H15.11M21 8.924a3.925 3.925 0 1 0-7.85 0 3.925 3.925 0 0 0 7.85 0"
    />
  </Svg>
);
export default IconlystManWomanLight;
