import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward10s2Light = ({
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
      d="M5.467 15.613c0 2.678 1.668 4.57 4.348 4.57h7.668c2.682 0 4.35-1.892 4.35-4.57V8.387c0-2.678-1.668-4.57-4.349-4.57H9.815c-2.673 0-4.348 1.892-4.348 4.57v3.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.834 10.465 1.652 1.652 1.643-1.642M10.957 14.556V9.441"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.126 14.653a1.57 1.57 0 0 1-1.571-1.571v-2.166a1.572 1.572 0 1 1 3.142 0v2.166c0 .868-.703 1.571-1.57 1.571"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward10s2Light;
