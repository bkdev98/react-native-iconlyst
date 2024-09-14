import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldTimeBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M13.912 10.73c-.136-4.364-1.498-7.114-2.453-7.114s-2.316 2.75-2.452 7.114zM13.562 12.151h-4.55c.13 4.28 1.43 7 2.39 7.1-.26-.66-.39-1.38-.39-2.13 0-2.05 1.01-3.87 2.55-4.97M15.335 10.73h5.1a9.02 9.02 0 0 0-7.92-8.232c1.75 1.024 2.71 4.563 2.82 8.232M10.404 2.498a9.016 9.016 0 0 0-7.919 8.232h5.098c.11-3.669 1.071-7.208 2.821-8.232M7.584 12.153h-5.1a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.136 20.001a2.88 2.88 0 0 1-2.879-2.879 2.88 2.88 0 0 1 2.88-2.879 2.88 2.88 0 0 1 2.878 2.88A2.88 2.88 0 0 1 17.136 20m0-7.258a4.385 4.385 0 0 0-4.379 4.38 4.385 4.385 0 0 0 4.38 4.378 4.385 4.385 0 0 0 4.378-4.379 4.385 4.385 0 0 0-4.379-4.379"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.648 17.425-.782-.468v-1.05a.75.75 0 0 0-1.5 0v1.475c0 .264.138.508.364.644l1.147.686a.75.75 0 0 0 1.03-.258.75.75 0 0 0-.259-1.029"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldTimeBulk;
