import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxes2Light = ({
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
      d="m15.23 20.99 4.215.01c1.473.004 2.392-1.034 2.396-2.506l.009-3.972c.004-1.472-.91-2.514-2.385-2.517l-4.214-.01c-1.473-.003-2.393 1.034-2.396 2.506l-.01 3.971c-.002 1.472.916 2.514 2.385 2.518M16.348 14.998h1.998"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.234 20.99 4.215.01c1.473.004 2.392-1.034 2.396-2.506l.009-3.972c.004-1.472-.91-2.514-2.385-2.517l-4.214-.01c-1.473-.003-2.393 1.034-2.396 2.506l-.01 3.971c-.002 1.472.916 2.514 2.385 2.518M7.354 14.998h1.998M10.23 11.996l4.215.01c1.473.002 2.392-1.035 2.396-2.507l.009-3.971c.004-1.472-.91-2.514-2.385-2.518L10.251 3c-1.473-.003-2.393 1.034-2.396 2.506l-.01 3.972c-.002 1.472.916 2.514 2.385 2.518M11.348 6.004h1.998"
    />
  </Svg>
);
export default IconlystDeliveryBoxes2Light;
