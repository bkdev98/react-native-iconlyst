import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessErrorLight = ({
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
      d="m10.947 19.06-7.56-8.99a1.453 1.453 0 0 1 .096-1.966c4.953-4.901 12.18-4.901 17.133 0 .536.53.582 1.389.095 1.967l-7.56 8.988a1.44 1.44 0 0 1-2.204 0M12.05 11.095V8.152m0 5.993v-.01"
    />
  </Svg>
);
export default IconlystWirelessErrorLight;
