import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKiwiLight = ({
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
      d="M10.24 3c5.83 0 10.557 2.428 10.557 9s-4.727 9-10.558 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.98 3c3.742 0 6.776 4.03 6.776 9s-3.034 9-6.776 9-6.777-4.03-6.777-9S6.237 3 9.98 3M9.54 9.13v-.768M9.54 15.638v-.769M12.11 12h.626M6.447 12h.587M11.557 9.73 12 9.285M7.186 14.733l.415-.415M7.63 9.73l-.444-.444M12 14.733l-.415-.415"
    />
  </Svg>
);
export default IconlystKiwiLight;
