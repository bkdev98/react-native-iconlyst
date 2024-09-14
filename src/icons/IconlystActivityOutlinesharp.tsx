import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.26 9.884h17.988v1.5H3.261zM15.609 13.496h1.508v1.5H15.61zM11.505 13.496h1.508v1.5h-1.508zM7.391 13.496H8.9v1.5H7.39zM15.609 17.091h1.508v1.5H15.61zM11.505 17.091h1.508v1.5h-1.508zM7.391 17.091H8.9v1.5H7.39zM16.74 3.035v4.544h-1.5V3.035zM9.269 3.035v4.544h-1.5V3.035z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.176 4.495h18.15v18.54H3.176zm1.5 1.5v15.54h15.15V5.995z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystActivityOutlinesharp;
