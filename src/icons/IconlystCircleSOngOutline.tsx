import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleSOngOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M10.984 16.81a2.853 2.853 0 1 1 2.831-2.513 2.857 2.857 0 0 1-2.83 2.512m0-4.206a1.355 1.355 0 1 0 .163.01 1 1 0 0 0-.165-.01z"
    />
    <Path
      fill={props.color}
      d="M13.07 14.959q-.045.001-.09-.005a.75.75 0 0 1-.654-.836l.755-6.266a.75.75 0 0 1 .7-.659.74.74 0 0 1 .776.566 2.18 2.18 0 0 0 1.3 1.42.749.749 0 0 1-.177 1.469.8.8 0 0 1-.295-.046 3.3 3.3 0 0 1-1.054-.578l-.516 4.275a.75.75 0 0 1-.744.66"
    />
  </Svg>
);
export default IconlystCircleSOngOutline;
