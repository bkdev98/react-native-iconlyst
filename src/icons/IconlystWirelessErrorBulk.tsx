import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessErrorBulk = ({
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
      d="M20.968 7.755c-5.168-5.112-12.67-5.114-17.836 0a1.963 1.963 0 0 0-.13 2.645l7.562 8.988a1.938 1.938 0 0 0 2.969 0l7.56-8.988c.65-.77.595-1.932-.125-2.645"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.05 11.852a.75.75 0 0 0 .75-.75V8.158a.75.75 0 0 0-1.5 0v2.944c0 .414.337.75.75.75M11.3 14.151c0 .414.337.745.75.745.415 0 .75-.34.75-.755a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystWirelessErrorBulk;
