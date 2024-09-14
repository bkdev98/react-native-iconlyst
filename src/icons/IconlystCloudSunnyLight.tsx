import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSunnyLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.36 4.709-.006.024m-5.192.825.01.018m-2.251 9.458.018-.011M2.09 9.839l-.037-.008M11.75 8.495a4.092 4.092 0 1 0-5.357 6.188"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.898 12.071c-1.985.018-3.59 1.352-3.59 3.622 0 1.47.876 2.734 2.132 3.302a4 4 0 0 0 1.455.296h8.568c.4 0 .928-.077 1.464-.292a3.62 3.62 0 0 0 2.128-3.306c0-2.27-1.603-3.604-3.588-3.622 0-1.428-1.121-4.285-4.285-4.285-3.163 0-4.284 2.857-4.284 4.285"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSunnyLight;
