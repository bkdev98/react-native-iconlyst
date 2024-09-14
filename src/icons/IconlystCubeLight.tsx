import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeLight = ({
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
      d="M9.265 3h9.68C20.08 3 21 3.92 21 5.055v9.68c0 .81-.322 1.587-.895 2.16l-3.21 3.21a3.06 3.06 0 0 1-2.16.895h-9.68A2.055 2.055 0 0 1 3 18.945v-9.68c0-.81.322-1.587.895-2.16l3.21-3.21A3.06 3.06 0 0 1 9.265 3M8.001 14.997h12.99M8.001 14.997l-4.4 5.4M8 14.997V3.277M3.06 8.688h12.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.79 20.817V9.087c0-.26.09-.51.27-.71l4.32-4.79"
    />
  </Svg>
);
export default IconlystCubeLight;
