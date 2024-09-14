import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification2TwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M5.941 10.606a6.309 6.309 0 0 1 12.617 0v2.793c0 1.886.574 3.728 1.645 5.28H4.297A9.3 9.3 0 0 0 5.94 13.4z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.25 4.297V2.138M15.479 18.68v.23a3.228 3.228 0 1 1-6.457 0v-.23"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNotification2TwoTonesharp;
