import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTicketTwoTone = ({
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
      d="m10.323 14.229 4.456-4.456M14.669 14.157v.044m.177-.034a.178.178 0 1 1-.357 0 .178.178 0 0 1 .357 0M10.333 9.821v.044m.177-.034a.178.178 0 1 1-.357 0 .178.178 0 0 1 .357 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.252 18.563.558-.074c.519-.07.778-.104 1.036-.135 3.092-.37 6.216-.37 9.308 0 .258.031.517.066 1.036.135l.558.074a.508.508 0 0 0 .575-.504v-.137c0-.934.758-1.692 1.693-1.692h.071a.413.413 0 0 0 .404-.5 17.7 17.7 0 0 1 0-7.46.412.412 0 0 0-.404-.499h-.071a1.693 1.693 0 0 1-1.692-1.692v-.137a.508.508 0 0 0-.576-.504l-.558.075c-.519.069-.778.103-1.037.134-3.09.37-6.215.37-9.307 0a81 81 0 0 1-1.036-.134l-.558-.075a.508.508 0 0 0-.576.504v.137c0 .934-.757 1.692-1.692 1.692h-.071a.412.412 0 0 0-.404.5 17.7 17.7 0 0 1 0 7.46c-.055.257.14.5.404.5h.071c.935 0 1.692.757 1.692 1.691v.137c0 .308.271.545.576.504"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.138 8.888 1.643-1.63M18.138 15.112l1.643 1.63M6.863 8.888l-1.644-1.63M6.863 15.112l-1.644 1.63"
    />
  </Svg>
);
export default IconlystDiscountTicketTwoTone;
