import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageDownOutline = ({
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
      d="M17.306 2.25a.75.75 0 0 1 .75.75v6.092a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.368 6.144a.75.75 0 0 1 1.06.003l1.878 1.884 1.876-1.884a.75.75 0 0 1 1.063 1.058l-2.407 2.418a.75.75 0 0 1-1.063 0l-2.409-2.418a.75.75 0 0 1 .002-1.06M11.522 13.5a3.11 3.11 0 0 0-3.878-.18l-3.95 2.867a.75.75 0 0 1-.88-1.214l3.948-2.867a4.61 4.61 0 0 1 5.752.269l.006.005 7.694 6.903a.75.75 0 0 1-1.001 1.116z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.708 14.885.048.045a.75.75 0 1 1-1.015 1.104c-.437-.401-.883-.808-1.4-1.033-.467-.203-.994-.259-1.656.098-.89.481-1.677.985-2.112 1.278a.75.75 0 0 1-.837-1.245c.462-.31 1.292-.842 2.235-1.353h.002c1.112-.6 2.126-.519 2.966-.154.757.33 1.366.89 1.769 1.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.087 4.93C4.41 5.655 4 6.717 4 8.033v7.947c0 1.318.408 2.38 1.084 3.104.67.72 1.657 1.168 2.944 1.168h8.434c1.288 0 2.278-.449 2.95-1.168.678-.726 1.088-1.787 1.088-3.104v-5.022a.75.75 0 1 1 1.5 0v5.022c0 1.629-.511 3.078-1.492 4.128-.985 1.055-2.389 1.644-4.046 1.644H8.028c-1.657 0-3.059-.59-4.042-1.645-.978-1.05-1.486-2.5-1.486-4.127V8.033c0-1.628.511-3.077 1.49-4.126.984-1.055 2.385-1.645 4.038-1.645h3.56a.75.75 0 0 1 0 1.5h-3.56c-1.282 0-2.27.448-2.941 1.168"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageDownOutline;
