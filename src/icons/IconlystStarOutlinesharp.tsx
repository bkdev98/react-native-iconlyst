import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarOutlinesharp = ({
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
      d="M12.25 5.532A13.63 13.63 0 0 1 5.282 12.5a13.63 13.63 0 0 1 6.968 6.968 13.63 13.63 0 0 1 6.968-6.968 13.63 13.63 0 0 1-6.968-6.968m-.726-2.47h1.452a12.12 12.12 0 0 0 8.711 8.712v1.452a12.12 12.12 0 0 0-8.71 8.711h-1.453a12.12 12.12 0 0 0-8.711-8.71v-1.453a12.12 12.12 0 0 0 8.71-8.711M16.503 6.498v-1.5c.328 0 .772-.201 1.162-.596.391-.395.586-.841.586-1.152h1.5c0 .309.196.755.59 1.151.393.397.837.597 1.159.597v1.5c-.35 0-.794.204-1.174.59-.381.388-.575.834-.575 1.159h-1.5c0-.316-.2-.76-.598-1.156-.399-.396-.844-.593-1.15-.593m2.488-.162a4 4 0 0 1 .594-.598 4 4 0 0 1-.582-.585 4 4 0 0 1-.598.6 4 4 0 0 1 .585.583"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarOutlinesharp;
