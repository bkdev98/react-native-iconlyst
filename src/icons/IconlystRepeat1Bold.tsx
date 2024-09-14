import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.058 7.57a6.6 6.6 0 0 0-4.67-1.93h-5.12a1 1 0 0 0 0 2h5.12c1.226 0 2.384.48 3.26 1.35A4.57 4.57 0 0 1 20 12.25c0 1.09-.373 2.114-1.078 2.96a.998.998 0 0 0 .767 1.64c.286 0 .57-.121.768-.36A6.63 6.63 0 0 0 22 12.25a6.55 6.55 0 0 0-1.942-4.68M16.39 17.86q-.001-.204-.079-.388c-.027-.062-.074-.111-.112-.166-.035-.051-.058-.109-.102-.154l-2.623-2.619a.999.999 0 1 0-1.413 1.415l.913.912H8.611a4.6 4.6 0 0 1-3.257-1.346A4.6 4.6 0 0 1 4 12.25a1 1 0 0 0-2 0c0 1.763.688 3.423 1.941 4.68a6.6 6.6 0 0 0 4.67 1.93h4.363l-.913.913a1 1 0 1 0 1.414 1.415l2.622-2.62c.055-.055.086-.125.126-.19.028-.044.067-.081.088-.131a1 1 0 0 0 .08-.387M4.362 5.955l.654-.324V9.26a1 1 0 0 0 2 0V4.02a1 1 0 0 0-1.445-.896l-2.098 1.04a1 1 0 0 0 .89 1.792"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeat1Bold;
