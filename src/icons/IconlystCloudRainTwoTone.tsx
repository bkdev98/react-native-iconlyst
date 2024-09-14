import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainTwoTone = ({
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
      d="M18.618 16.452a4.14 4.14 0 0 0 2.437-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899s-4.897 3.266-4.897 4.9c-2.27.019-4.103 1.543-4.103 4.14 0 1.678.999 3.124 2.436 3.773"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.3 17.61v1.377m0-5.506v1.376m5.507 2.753v1.377m0-5.506v1.376m-2.753 4.13v1.377m0-5.507v1.377"
    />
  </Svg>
);
export default IconlystCloudRainTwoTone;
