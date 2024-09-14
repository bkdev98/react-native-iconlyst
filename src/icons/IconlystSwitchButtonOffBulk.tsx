import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchButtonOffBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.545 5.045h-5.09c-3.835 0-6.955 3.122-6.955 6.96 0 3.832 3.12 6.95 6.955 6.95h5.09c3.835 0 6.955-3.118 6.955-6.95 0-3.838-3.12-6.96-6.955-6.96"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.462 15.746a3.743 3.743 0 0 1-3.737-3.74 3.74 3.74 0 0 1 3.737-3.74 3.74 3.74 0 0 1 3.737 3.74 3.743 3.743 0 0 1-3.737 3.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwitchButtonOffBulk;
