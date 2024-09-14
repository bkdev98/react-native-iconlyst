import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobBulk = ({
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
      d="M12 3.9c3.61 0 6.69 2.34 7.8 5.57-1.9-1.1-4.9-1.67-7.8-1.67s-5.9.57-7.8 1.67C5.31 6.24 8.39 3.9 12 3.9m9.74 7.99C21.61 6.64 17.29 2.4 12 2.4s-9.61 4.24-9.74 9.49c-.01.09-.01.17-.01.26s0 .17.01.26c.13 5.26 4.45 9.49 9.74 9.49s9.61-4.23 9.74-9.49c.01-.09.01-.17.01-.26s0-.17-.01-.26"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M3.75 12.15C3.75 13.34 6.89 15 12 15s8.25-1.66 8.25-2.85S17.11 9.3 12 9.3s-8.25 1.66-8.25 2.85"
    />
  </Svg>
);
export default IconlystSphereGlobBulk;
