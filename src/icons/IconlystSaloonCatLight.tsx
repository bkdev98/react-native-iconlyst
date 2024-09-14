import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSaloonCatLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.804 20.587c-1.473.448-2.838.614-3.65.63.072-1.459.267-3.123.634-5.2.307-1.739-.958-2.975-2.428-2.975-1.952 0-2.837-2.345-2.56-3.463 1.014 0 1.71-.546 2.132-1.573.731-1.78 2.21-2.235 3.95-2.235V2.938c3.112 1.289 5.54 3.795 6.16 7.192M8.277 9.086v.015M18.36 15.183a1.338 1.338 0 1 1 2.666-.237 1.338 1.338 0 0 1-2.666.237M18.881 16.174l-4.062 4.84"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.758 15.183a1.338 1.338 0 1 0-2.665-.237 1.338 1.338 0 0 0 2.665.237M15.237 16.174l4.062 4.84"
    />
  </Svg>
);
export default IconlystSaloonCatLight;
