import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTokenaryBulk = ({
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
      fill={props.color}
      d="M3 12.004c0-5.238 4.262-9.5 9.5-9.5v19c-5.238 0-9.5-4.262-9.5-9.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.504v19c5.238 0 9.5-4.262 9.5-9.5s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTokenaryBulk;
