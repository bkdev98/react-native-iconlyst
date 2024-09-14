import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRaspberriesLight = ({
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
      d="M14.43 8.59c1.819-.778 2.5-2.384 2.5-3.4-2.224-.237-3.267.521-3.51.93.18-.56.15-1.965-1.42-3.12-1.57 1.155-1.6 2.56-1.42 3.12-.243-.409-1.285-1.167-3.51-.93 0 1 .6 2.572 2.366 3.364"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.29 19.593a2.568 2.568 0 0 0 3.43-2.937 2.567 2.567 0 0 0-.121-4.664 2.568 2.568 0 0 0-3.81-3.08A3.9 3.9 0 0 0 12 8.483c-.644 0-1.252.155-1.79.429a2.568 2.568 0 0 0-3.81 3.08 2.568 2.568 0 0 0-.12 4.664 2.568 2.568 0 0 0 3.43 2.937 2.567 2.567 0 0 0 4.58 0M8.242 14.338h.01M15.75 14.338h.01M11.845 14.338h.01M11.845 17.906h.01M11.845 11.239h.01M9.343 11.68l.007.007M14.651 16.988l.007.007M9.343 16.994l.007-.007M14.651 11.686l.007-.007"
    />
  </Svg>
);
export default IconlystRaspberriesLight;
