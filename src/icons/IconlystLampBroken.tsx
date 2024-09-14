import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.912 8.491c.703 3.39-1.141 6.513-3.977 7.712v2.253a2.69 2.69 0 0 1-2.68 2.68 2.69 2.69 0 0 1-2.68-2.68v-2.265a6.77 6.77 0 0 1-4.137-6.247c0-4.23 3.861-7.55 8.241-6.663a6.75 6.75 0 0 1 3.673 2.135M9.576 16.207h5.366"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.668 11.613c.21.917.927 1.944 2.6 1.932s2.376-1.051 2.571-1.97c.203-.946-.085-1.957-.6-2.755-.79-1.223-1.793-2.03-2.023-2.18-.227.153-1.219.976-1.989 2.21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.947 16.08c.486-.865.617-1.782.605-2.546m-.003-.012c-.01-.998-.252-1.74-.252-1.74"
    />
  </Svg>
);
export default IconlystLampBroken;
