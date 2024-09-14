import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteBoardBulk = ({
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
      d="M7.643 17.73h9.28a4.265 4.265 0 0 0 4.26-4.26V8.38a4.265 4.265 0 0 0-4.26-4.26h-9.28a4.265 4.265 0 0 0-4.26 4.26v5.09a4.265 4.265 0 0 0 4.26 4.26"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.533 4.12h1.5V3a.75.75 0 0 0-1.5 0zM10.771 17.73l-2.695 2.745a.749.749 0 1 0 1.07 1.05l3.138-3.195 3.137 3.195a.747.747 0 0 0 1.06.01c.296-.29.3-.764.01-1.06l-2.694-2.745z"
    />
  </Svg>
);
export default IconlystWhiteBoardBulk;
