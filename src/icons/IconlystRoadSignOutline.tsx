import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadSignOutline = ({
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
      d="M12.998 18a.75.75 0 1 0-1.5 0v3a.75.75 0 0 0 1.5 0zM13.006 3a.75.75 0 0 0-1.5 0v2a.75.75 0 1 0 1.5 0zM13.004 10a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
    />
    <Path
      fill={props.color}
      d="M17.753 10.757H7.073a1.75 1.75 0 0 1-1.3-.583l-1.344-1.5a1.75 1.75 0 0 1 0-2.334l1.344-1.5a1.75 1.75 0 0 1 1.3-.582h10.68a1.75 1.75 0 0 1 1.75 1.75v3.005a1.75 1.75 0 0 1-1.75 1.744M6.89 5.834l-1.344 1.5a.25.25 0 0 0 0 .334l1.344 1.5a.25.25 0 0 0 .186.083h10.68a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25H7.077a.25.25 0 0 0-.186.083M6.752 18.752A1.75 1.75 0 0 1 4.998 17v-3a1.753 1.753 0 0 1 1.748-1.75h10.682a1.75 1.75 0 0 1 1.3.582l1.344 1.5a1.75 1.75 0 0 1 0 2.334l-1.345 1.5a1.75 1.75 0 0 1-1.3.583zm10.68-5.006H6.752a.25.25 0 0 0-.25.25V17a.25.25 0 0 0 .25.25h10.68a.25.25 0 0 0 .186-.083l1.344-1.5a.25.25 0 0 0 0-.334l-1.344-1.5a.25.25 0 0 0-.19-.087z"
    />
  </Svg>
);
export default IconlystRoadSignOutline;
