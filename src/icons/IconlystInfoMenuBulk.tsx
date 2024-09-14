import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoMenuBulk = ({
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
      fillRule="evenodd"
      d="M12.25 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.087 13.052a1.011 1.011 0 1 1 .002-2.022 1.011 1.011 0 0 1-.002 2.022m-3.899 0a1.01 1.01 0 0 1-1.012-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.453 1.01-1.01 1.01m-3.901 0a1.01 1.01 0 0 1-1.011-1.01 1.011 1.011 0 1 1 1.011 1.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoMenuBulk;
