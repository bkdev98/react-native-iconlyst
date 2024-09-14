import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxes2Broken = ({
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
      d="M21.841 18.494c-.004 1.472-.923 2.51-2.396 2.506l-4.215-.01c-1.469-.004-2.387-1.046-2.384-2.518l.01-3.971c.002-1.472.922-2.51 2.395-2.506l4.214.01c1.474.003 2.389 1.045 2.385 2.517v1.002M16.348 14.998h1.998M3.85 18.472c-.003 1.472.915 2.514 2.384 2.518l4.215.01c1.473.004 2.392-1.034 2.396-2.506l.009-3.972c.004-1.472-.91-2.514-2.385-2.517l-4.214-.01c-1.473-.003-2.393 1.034-2.396 2.506v1.226M7.354 14.998h1.998"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.841 9.5c-.004 1.471-.923 2.508-2.396 2.505l-4.215-.01c-1.469-.003-2.387-1.045-2.384-2.517l.01-3.972C7.857 4.034 8.777 2.997 10.25 3l4.214.01c1.474.004 2.389 1.046 2.385 2.518v1.291M11.348 6.004h1.998"
    />
  </Svg>
);
export default IconlystDeliveryBoxes2Broken;
