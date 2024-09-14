import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorBulk = ({
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
      d="M12 17.809a1 1 0 0 0-1 1v.068c0 .553.448.966 1 .966s1-.481 1-1.034a1 1 0 0 0-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.877a1 1 0 0 0-1 1v9.199a1 1 0 1 0 2 0v-9.2a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorBulk;
