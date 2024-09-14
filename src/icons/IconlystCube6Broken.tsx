import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube6Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.03 3H9.765c-.81 0-1.587.322-2.16.895l-3.21 3.21a3.06 3.06 0 0 0-.895 2.16v9.68C3.5 20.08 4.42 21 5.555 21h1.434M21.5 12.315v2.42c0 .81-.323 1.587-.895 2.16l-3.21 3.21a3.06 3.06 0 0 1-2.16.895h-4.84M21.5 8.166V5.055C21.5 3.92 20.58 3 19.446 3h-4.84M5.518 18.648l-1.42 1.75M8.498 5.187v-1.91M8.5 7.53v2.708"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 13v2h2M8.5 15l-1.264 1.55M21.488 14.997h-2.54M16.287 15h-3.158M16.29 20.817v-7.97M20.88 3.586l-4.32 4.79c-.17.2-.27.45-.27.71v.8M6.31 8.688h9.979"
    />
  </Svg>
);
export default IconlystCube6Broken;
