import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireWoodLight = ({
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
      d="m5.262 21 13.475-6.196M12.481 13.27c3.213-.53 4.338-4.176 2.94-6.898-.735-1.528-1.984-2.601-3.458-3.372.224 1.73-.214 4.66-1.853 4.66-.399.168-.654-2.065-.654-2.354-.194.14-.659.57-.828.738-3.16 3.01-.354 8.147 3.853 7.226"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.18 9.443s-.493 1.158-1.887.944M8.51 16.298l-3.248-1.493M18.737 21l-3.856-1.774"
    />
  </Svg>
);
export default IconlystFireWoodLight;
