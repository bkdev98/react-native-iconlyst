import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageTickOutline = ({
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
      d="M11.523 13.491a3.11 3.11 0 0 0-3.877-.179l-3.95 2.867a.75.75 0 0 1-.88-1.214L6.763 12.1a4.61 4.61 0 0 1 5.752.268l.006.005 7.694 6.903a.75.75 0 0 1-1.002 1.116z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.71 14.878.048.044a.75.75 0 0 1-1.015 1.104c-.437-.401-.883-.808-1.4-1.033-.467-.203-.994-.258-1.656.098-.89.482-1.677.986-2.112 1.278a.75.75 0 0 1-.837-1.245c.462-.31 1.292-.842 2.235-1.353h.002c1.112-.6 2.125-.519 2.965-.154.758.33 1.366.89 1.77 1.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.087 4.926C4.41 5.65 4 6.713 4 8.029v7.947c0 1.318.408 2.38 1.084 3.104.67.719 1.657 1.168 2.944 1.168h8.434c1.287 0 2.278-.45 2.95-1.169.677-.725 1.088-1.786 1.088-3.103v-5.022a.75.75 0 0 1 1.5 0v5.022c0 1.628-.512 3.078-1.492 4.127-.986 1.055-2.389 1.645-4.046 1.645H8.028c-1.657 0-3.059-.59-4.042-1.646-.978-1.05-1.486-2.499-1.486-4.126V8.03c0-1.628.511-3.077 1.49-4.126.984-1.055 2.385-1.645 4.038-1.645h4.534a.75.75 0 0 1 0 1.5H8.028c-1.282 0-2.27.448-2.941 1.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.53 3.68a.75.75 0 0 1 0 1.061l-4.073 4.072a.75.75 0 0 1-1.06 0l-2.038-2.036a.75.75 0 0 1 1.06-1.06l1.507 1.505 3.543-3.541a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageTickOutline;
