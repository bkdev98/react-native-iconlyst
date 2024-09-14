import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDarkModeTwoTone = ({
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
      d="M16.451 19.762c.049.014.058.081.012.106-3.418 1.899-7.813 1.395-10.706-1.498-3.509-3.508-3.502-9.194 0-12.696a8.97 8.97 0 0 1 10.7-1.504c.045.024.036.091-.012.106a8.11 8.11 0 0 0-5.717 7.746c.001 3.64 2.41 6.735 5.723 7.74"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.478 5.636a8.97 8.97 0 0 1 0 12.683"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDarkModeTwoTone;
