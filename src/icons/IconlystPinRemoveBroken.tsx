import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRemoveBroken = ({
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
      d="m8.79 10.316.017-1.766M16.077 15.82h-.01a1.4 1.4 0 0 1-.273.027H8.7c-1.44 0-2.244-1.67-1.343-2.8M12.248 15.934v4.069M19.564 19.314 4.934 4.684M9.035 4.027h.009Q9.189 4 9.335 4h5.821c.822 0 1.573.592 1.652 1.413.044.513-.159.98-.503 1.299-.371.335-.619.786-.619 1.28l.018 2.324c0 .14.018.273.035.406"
    />
  </Svg>
);
export default IconlystPinRemoveBroken;
