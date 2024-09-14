import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdBulk = ({
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
      d="M16.435 10.13a4.46 4.46 0 0 0-1.171-3.003 1 1 0 1 0-1.478 1.346c.424.467.649 1.04.649 1.657v3.74a2.44 2.44 0 0 1-2.437 2.44 2.44 2.44 0 0 1-2.435-2.44 1 1 0 1 0-2 0c0 2.448 1.99 4.44 4.436 4.44a4.443 4.443 0 0 0 4.435-4.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 5.691a4.443 4.443 0 0 0-4.437 4.44v.94a.999.999 0 1 0 1.999 0v-.94A2.44 2.44 0 0 1 12 7.69a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M4.356 9.64C4.356 5.427 7.785 2 12 2s7.644 3.427 7.644 7.64v4.69c0 .442-.039.884-.113 1.312-.232 1.123-.574 2.017-1.05 2.765a7.6 7.6 0 0 1-1.197 1.467.997.997 0 0 1-1.414-.035 1 1 0 0 1 .035-1.414 5.6 5.6 0 0 0 .885-1.085c.343-.539.603-1.235.776-2.073.049-.284.078-.61.078-.937V9.64C17.644 6.53 15.112 4 12 4a5.65 5.65 0 0 0-5.644 5.64v4.69c0 .237.015.483.044.711a.997.997 0 0 1-.862 1.12.996.996 0 0 1-1.12-.862 8 8 0 0 1-.062-.969zM12.001 20c.425 0 .826-.045 1.192-.133a1 1 0 0 1 .467 1.945 7.2 7.2 0 0 1-1.659.188 7.6 7.6 0 0 1-6.486-3.601 1 1 0 0 1 1.698-1.058A5.61 5.61 0 0 0 12.001 20" />
      <Path d="M10.997 10.04a1 1 0 1 1 2 0v3.93a1 1 0 1 1-2 0z" />
    </G>
  </Svg>
);
export default IconlystTouchIdBulk;
