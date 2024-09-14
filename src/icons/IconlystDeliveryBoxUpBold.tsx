import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxUpBold = ({
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
      d="M18.014 9.48a.75.75 0 0 1-1.061-.001l-.382-.384v4.374a.75.75 0 0 1-1.5 0V9.092l-.385.387a.75.75 0 0 1-1.061.001.75.75 0 0 1-.002-1.06l1.664-1.67a.773.773 0 0 1 1.063 0l1.666 1.669a.75.75 0 0 1-.002 1.061m-.625 7.989H8.313a.75.75 0 0 1 0-1.5h9.076a.75.75 0 0 1 0 1.5M7.684 8.42l1.664-1.67a.77.77 0 0 1 1.062 0l1.666 1.669a.75.75 0 0 1-1.063 1.06l-.384-.385v4.375a.75.75 0 0 1-1.5 0V9.094l-.383.385a.747.747 0 0 1-1.06.001.75.75 0 0 1-.002-1.06m9.384-5.92H8.633c-3.16 0-5.283 2.222-5.283 5.529v7.94c0 3.308 2.123 5.531 5.283 5.531h8.435c3.159 0 5.282-2.223 5.282-5.531v-7.94c0-3.307-2.123-5.529-5.282-5.529"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxUpBold;
