import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinOutline = ({
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
      d="M8.255 3.75a.734.734 0 0 0-.734.733v.933c0 .404.328.733.734.733h7.99a.733.733 0 0 0 .733-.733v-.933a.733.733 0 0 0-.733-.733zm6.764 3.899H9.48v1.608c0 .373-.09.742-.263 1.073l-1.603 3.065a.818.818 0 0 0 .723 1.194h7.826a.815.815 0 0 0 .723-1.194l-1.603-3.064a2.3 2.3 0 0 1-.264-1.074zM7.98 7.633a2.234 2.234 0 0 1-1.96-2.217v-.933A2.234 2.234 0 0 1 8.256 2.25h7.99c1.233 0 2.233 1 2.233 2.233v.933c0 1.14-.855 2.082-1.96 2.217v1.624c0 .13.032.26.094.379l1.603 3.065a2.315 2.315 0 0 1-2.053 3.389H13V21a.75.75 0 0 1-1.5 0v-4.91H8.337a2.315 2.315 0 0 1-2.053-3.39l1.603-3.064a.8.8 0 0 0 .093-.38z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinOutline;
