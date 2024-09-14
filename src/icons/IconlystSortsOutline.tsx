import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsOutline = ({
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
      d="M10.209 17.836a.75.75 0 0 1 .75-.75h8.727a.75.75 0 0 1 0 1.5H10.96a.75.75 0 0 1-.75-.75M10.209 12a.75.75 0 0 1 .75-.75h8.727a.75.75 0 0 1 0 1.5H10.96a.75.75 0 0 1-.75-.75M10.209 6.184a.75.75 0 0 1 .75-.75h8.727a.75.75 0 0 1 0 1.5H10.96a.75.75 0 0 1-.75-.75M5.9 17.484a.335.335 0 1 0 0 .67.335.335 0 0 0 0-.67m-1.836.335a1.835 1.835 0 1 1 3.67 0 1.835 1.835 0 0 1-3.67 0M5.9 11.664a.335.335 0 1 0 0 .67.335.335 0 0 0 0-.67M4.063 12a1.835 1.835 0 1 1 3.67 0 1.835 1.835 0 0 1-3.67 0M5.9 5.848a.335.335 0 1 0 0 .669.335.335 0 0 0 0-.67m-1.836.335a1.835 1.835 0 1 1 3.67 0 1.835 1.835 0 0 1-3.67 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortsOutline;
