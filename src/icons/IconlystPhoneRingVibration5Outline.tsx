import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration5Outline = ({
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
      d="M10.59 21.12a4 4 0 0 1-4-3.99L6.55 6.913a4 4 0 0 1 3.99-4.02l4.6-.014h.014a4.01 4.01 0 0 1 4.005 3.99l.035 10.217a4.01 4.01 0 0 1-3.991 4.018l-4.6.016zm4.56-16.741h-.007l-4.6.015a2.5 2.5 0 0 0-2.495 2.514l.035 10.216a2.5 2.5 0 0 0 2.5 2.5h.009l4.594-.016a2.507 2.507 0 0 0 2.5-2.512L17.65 6.875a2.51 2.51 0 0 0-2.5-2.496M4.18 16.945a.75.75 0 0 1-.618-1.176l.459-.666-.77-1.13a.75.75 0 0 1 0-.847l.774-1.128-.77-1.129a.75.75 0 0 1 0-.848L4.028 8.9l-.5-.73a.75.75 0 0 1 1.239-.846l.789 1.155a.75.75 0 0 1 0 .848l-.773 1.122.77 1.13a.75.75 0 0 1 0 .846l-.774 1.13.77 1.13a.75.75 0 0 1 0 .848l-.75 1.09a.75.75 0 0 1-.62.323M21.564 16.945a.75.75 0 0 1-.618-.324l-.75-1.084a.75.75 0 0 1 0-.848l.771-1.13-.775-1.13a.75.75 0 0 1 0-.847l.77-1.128-.773-1.123a.75.75 0 0 1 0-.848l.788-1.155a.75.75 0 1 1 1.238.846l-.5.73.772 1.122a.75.75 0 0 1 0 .848l-.77 1.13.774 1.127a.75.75 0 0 1 0 .847l-.769 1.13.458.666a.751.751 0 0 1-.617 1.176z"
    />
    <Path fill={props.color} d="M12.888 17.88a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default IconlystPhoneRingVibration5Outline;
