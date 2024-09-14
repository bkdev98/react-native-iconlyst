import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDriveBulk = ({
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
      d="M11.543 8.448c.177-.345.743-.345.92 0l2.383 4.695c.09.176.322.219.476.094a6.65 6.65 0 0 1 4.639-1.47c.254.02.44-.255.31-.474l-4.567-7.677a2.33 2.33 0 0 0-1.986-1.128l-3.428.002c-.812 0-1.573.433-1.987 1.13l-5.765 9.685a2.32 2.32 0 0 0 0 2.368l2.349 3.942a2.33 2.33 0 0 0 1.988 1.13h5.94a.314.314 0 0 0 .293-.408 6.62 6.62 0 0 1 .391-4.81c.102-.208-.044-.46-.276-.46h-4.2a.517.517 0 0 1-.46-.75z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.502 19.435a2.321 2.321 0 0 1-3.853-1.738.75.75 0 1 0-1.5 0 3.823 3.823 0 0 0 3.819 3.818c.932 0 1.829-.34 2.527-.956a.751.751 0 0 0-.993-1.125M18.969 13.875a3.8 3.8 0 0 0-2.527.955.75.75 0 1 0 .994 1.124 2.321 2.321 0 0 1 3.852 1.739.75.75 0 0 0 1.5 0 3.823 3.823 0 0 0-3.82-3.818"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleDriveBulk;
