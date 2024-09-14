import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageEditOutline = ({
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
      d="M11.523 13.491a3.11 3.11 0 0 0-3.877-.179l-3.95 2.867a.75.75 0 1 1-.88-1.214L6.763 12.1a4.61 4.61 0 0 1 5.752.268l.006.005 7.693 6.902a.75.75 0 0 1-1.001 1.117z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.708 14.878.049.044a.75.75 0 1 1-1.015 1.104c-.437-.401-.883-.808-1.4-1.033-.467-.203-.994-.258-1.656.098-.89.482-1.677.986-2.112 1.278a.75.75 0 0 1-.837-1.245c.462-.31 1.292-.842 2.235-1.353h.002c1.112-.6 2.125-.519 2.965-.154.758.33 1.366.89 1.77 1.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.087 4.926C4.41 5.65 4 6.713 4 8.029v7.947c0 1.317.408 2.379 1.084 3.103.67.72 1.657 1.168 2.944 1.168h8.434c1.287 0 2.277-.449 2.95-1.168.677-.726 1.087-1.787 1.087-3.103v-5.023a.75.75 0 1 1 1.5 0v5.023c0 1.628-.511 3.077-1.491 4.127-.986 1.055-2.389 1.644-4.046 1.644H8.028c-1.657 0-3.059-.59-4.042-1.645-.978-1.05-1.486-2.5-1.486-4.126V8.029c0-1.628.511-3.077 1.49-4.126.984-1.055 2.385-1.645 4.038-1.645h5.509a.75.75 0 0 1 0 1.5H8.028c-1.282 0-2.27.448-2.941 1.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.165 2.919a1.85 1.85 0 0 1 2.614-.098l.687.637a1.85 1.85 0 0 1 .098 2.614l-3.44 3.707a2.75 2.75 0 0 1-1.732.865l-.71.073a1.55 1.55 0 0 1-1.71-1.585l.02-.714a2.75 2.75 0 0 1 .734-1.793zm1.594 1.001a.35.35 0 0 0-.495.019l-3.439 3.706a1.25 1.25 0 0 0-.333.815l-.02.714c0 .03.025.054.055.051l.71-.073a1.25 1.25 0 0 0 .788-.393l3.439-3.707a.35.35 0 0 0-.018-.495z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageEditOutline;
