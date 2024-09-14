import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandLight = ({
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
      d="M17.382 3.62a2.12 2.12 0 1 1 2.997 2.998L6.62 20.38a2.12 2.12 0 0 1-2.998-2.997zM5.73 9.561l-.106-.287a3.96 3.96 0 0 0-2.337-2.34L3 6.826l.287-.107a3.96 3.96 0 0 0 2.337-2.34l.107-.288.106.288a3.96 3.96 0 0 0 2.337 2.34l.287.107-.287.106a3.96 3.96 0 0 0-2.337 2.34zM19.5 12.897c.156.511.555.911 1.066 1.067-.51.155-.91.556-1.065 1.067a1.6 1.6 0 0 0-1.065-1.067c.51-.156.91-.556 1.065-1.067M15.419 5.648 18.34 8.57M16.178 18.337h-.01M11.187 3.587h.01"
    />
  </Svg>
);
export default IconlystMagicWandLight;
