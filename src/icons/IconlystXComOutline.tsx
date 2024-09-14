import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXComOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.205 5.404a1.14 1.14 0 0 1 .943-1.779h3.646c.571 0 1.105.283 1.426.756l9.664 14.248a1.14 1.14 0 0 1-.943 1.78h-3.646a1.72 1.72 0 0 1-1.426-.757zm1.623-.279L15.11 18.81c.042.062.111.098.185.098h2.966L8.979 5.223a.22.22 0 0 0-.185-.098z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.946 12.87a.75.75 0 0 1 .067 1.059l-5.781 6.567a.75.75 0 0 1-1.126-.992l5.781-6.566a.75.75 0 0 1 1.058-.068M19.253 3.437a.75.75 0 0 1 .067 1.059l-5.437 6.175a.75.75 0 0 1-1.126-.991l5.437-6.176a.75.75 0 0 1 1.059-.067"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXComOutline;
