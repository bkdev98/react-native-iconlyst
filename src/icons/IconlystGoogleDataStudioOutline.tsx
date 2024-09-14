import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDataStudioOutline = ({
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
      d="M8.673 5.602a2.87 2.87 0 0 1 2.871-2.872h6.943a.75.75 0 0 1 0 1.5h-6.943a1.371 1.371 0 0 0 0 2.743h6.943a.75.75 0 0 1 0 1.5h-6.943a2.87 2.87 0 0 1-2.871-2.871M2.502 12.286a2.87 2.87 0 0 1 2.871-2.872h6.943a.75.75 0 0 1 0 1.5H5.373a1.371 1.371 0 1 0 0 2.743h6.943a.75.75 0 0 1 0 1.5H5.373a2.87 2.87 0 0 1-2.871-2.871M8.674 19.356a2.87 2.87 0 0 1 2.871-2.872h6.943a.75.75 0 0 1 0 1.5h-6.943a1.371 1.371 0 1 0 0 2.743h6.943a.75.75 0 0 1 0 1.5h-6.943a2.87 2.87 0 0 1-2.871-2.871"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.615 19.356a2.871 2.871 0 1 1 5.743 0 2.871 2.871 0 0 1-5.743 0m2.872-1.372a1.371 1.371 0 1 0 0 2.743 1.371 1.371 0 0 0 0-2.743M9.445 12.286a2.871 2.871 0 1 1 5.743 0 2.871 2.871 0 0 1-5.743 0m2.872-1.372a1.371 1.371 0 1 0 0 2.743 1.371 1.371 0 0 0 0-2.743M15.615 5.598a2.871 2.871 0 1 1 5.743 0 2.871 2.871 0 0 1-5.743 0m2.872-1.371a1.371 1.371 0 1 0 0 2.742 1.371 1.371 0 0 0 0-2.742"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleDataStudioOutline;
