import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageHeartOutline = ({
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
      d="M11.522 13.491a3.11 3.11 0 0 0-3.878-.179l-3.95 2.867a.75.75 0 0 1-.88-1.213l3.948-2.867a4.61 4.61 0 0 1 5.752.268l.006.005 7.694 6.903a.75.75 0 0 1-1.001 1.116z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.708 14.878.048.044a.75.75 0 0 1-1.015 1.104c-.437-.401-.883-.808-1.4-1.033-.467-.203-.994-.258-1.656.098-.89.482-1.677.986-2.112 1.278a.75.75 0 1 1-.837-1.245c.462-.31 1.292-.842 2.235-1.353h.002c1.112-.6 2.126-.519 2.966-.154.757.33 1.366.89 1.769 1.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.087 4.922C4.41 5.647 4 6.709 4 8.026v7.947c0 1.317.408 2.379 1.084 3.103.67.72 1.657 1.168 2.944 1.168h8.434c1.288 0 2.278-.449 2.95-1.168.678-.726 1.088-1.787 1.088-3.104V10.95a.75.75 0 0 1 1.5 0v5.023c0 1.628-.511 3.077-1.492 4.127-.985 1.055-2.389 1.644-4.046 1.644H8.028c-1.657 0-3.059-.59-4.042-1.645-.978-1.05-1.486-2.5-1.486-4.126V8.026c0-1.629.511-3.078 1.49-4.127.984-1.055 2.385-1.645 4.038-1.645h3.274a.75.75 0 0 1 0 1.5H8.028c-1.282 0-2.27.448-2.941 1.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.916 2.543a2.63 2.63 0 0 1 1.927-.13c1.607.517 2.063 2.224 1.642 3.542v.001c-.34 1.055-1.197 1.904-1.87 2.451a10 10 0 0 1-1.303.896l-.025.014-.007.004-.003.002-.36-.658-.36.657h-.002l-.003-.002-.007-.004-.025-.014-.085-.05a10.414 10.414 0 0 1-1.222-.853c-.673-.547-1.533-1.398-1.863-2.445-.422-1.321.04-3.024 1.643-3.54l.005-.001a2.64 2.64 0 0 1 1.918.13m.001 6.122-.36.657a.75.75 0 0 0 .72.001zm.001-.878a9 9 0 0 0 .75-.544c.618-.502 1.187-1.12 1.388-1.745.248-.778-.079-1.465-.67-1.656a1.13 1.13 0 0 0-1.02.172.75.75 0 0 1-.896.002 1.14 1.14 0 0 0-1.02-.173c-.592.192-.919.88-.671 1.655l.001.004c.192.61.758 1.228 1.38 1.734.282.23.552.417.758.551"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageHeartOutline;
