import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.899 19.06-7.561-8.99a1.453 1.453 0 0 1 .096-1.966c4.953-4.901 12.18-4.901 17.133 0 .536.53.582 1.389.095 1.967l-7.56 8.988a1.44 1.44 0 0 1-2.203 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.063 15.694c2.24-2.39 5.628-2.39 7.878-.011M5.256 12.36c3.778-4.245 9.7-4.245 13.487-.01"
    />
  </Svg>
);
export default IconlystWirelessLight;
