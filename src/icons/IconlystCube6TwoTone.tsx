import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube6TwoTone = ({
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
      d="M9.765 3h9.68c1.135 0 2.055.92 2.055 2.055v9.68c0 .81-.322 1.587-.895 2.16l-3.21 3.21a3.06 3.06 0 0 1-2.16.895h-9.68A2.055 2.055 0 0 1 3.5 18.945v-9.68c0-.81.322-1.587.895-2.16l3.21-3.21A3.06 3.06 0 0 1 9.765 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.518 18.648-1.42 1.75M8.498 5.187v-1.91M8.5 7.53v2.708M8.5 13v2m0 0h2m-2 0-1.264 1.55M21.488 14.997h-2.54M16.287 15h-3.158"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.29 20.817V9.087c0-.26.1-.51.27-.71l4.32-4.79M3.559 8.688h12.73"
    />
  </Svg>
);
export default IconlystCube6TwoTone;
