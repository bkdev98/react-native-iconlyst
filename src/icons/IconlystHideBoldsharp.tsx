import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m22.833 7.584-1.807-.858-.43.903c-1.337 2.814-3.41 4.78-5.8 5.602l-.201.058a7.8 7.8 0 0 1-2.346.373c-3.432-.002-6.552-2.257-8.346-6.033l-.429-.903-1.807.858.43.903a14.6 14.6 0 0 0 2.172 3.336L2.056 14.04 3.47 15.45l2.226-2.226a10.8 10.8 0 0 0 2.918 1.736l-.86 2.963 1.92.559.865-2.976c.56.1 1.13.155 1.71.155h.002c.555 0 1.1-.05 1.635-.14l.86 2.96 1.92-.558-.853-2.935a10.8 10.8 0 0 0 2.949-1.728l2.189 2.19 1.415-1.412-2.172-2.173c.852-.967 1.6-2.096 2.21-3.38z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHideBoldsharp;
