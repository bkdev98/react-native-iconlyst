import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLikeLight = ({
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
      d="M8.953 21H17a3.525 3.525 0 0 0 3.524-3.524V6.524A3.525 3.525 0 0 0 17.001 3H8.953a3.524 3.524 0 0 0-3.524 3.524v10.952A3.524 3.524 0 0 0 8.953 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.428 9.598c-.3-.935.05-2.005 1.032-2.32a1.67 1.67 0 0 1 1.516.254 1.69 1.69 0 0 1 1.513-.255c.982.316 1.335 1.386 1.035 2.32-.465 1.483-2.548 2.625-2.548 2.625s-2.065-1.125-2.548-2.624"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.428 15.602h15.096"
    />
  </Svg>
);
export default IconlystCardLikeLight;
