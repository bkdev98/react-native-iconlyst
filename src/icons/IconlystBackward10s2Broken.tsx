import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward10s2Broken = ({
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
      d="M21.084 8.387c0-2.678-1.668-4.57-4.349-4.57H9.066c-2.673 0-4.348 1.892-4.348 4.57v3.73M4.718 15.611c0 2.678 1.667 4.57 4.348 4.57h7.668c2.682 0 4.35-1.892 4.35-4.57v-3.584"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.084 10.465 1.652 1.652 1.643-1.642M10.207 14.556V9.441"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.377 14.653a1.57 1.57 0 0 1-1.571-1.571v-2.166a1.571 1.571 0 1 1 3.142 0v2.166c0 .868-.703 1.571-1.571 1.571"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward10s2Broken;
