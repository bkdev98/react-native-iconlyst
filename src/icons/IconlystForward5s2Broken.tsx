import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward5s2Broken = ({
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
      d="M9.497 14.69h1.866a1.352 1.352 0 0 0 0-2.703H9.497V9.43h2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.084 8.387c0-2.678 1.668-4.57 4.349-4.57h7.669c2.673 0 4.348 1.892 4.348 4.57v3.73M19.45 15.611c0 2.678-1.667 4.57-4.348 4.57H7.434c-2.682 0-4.35-1.892-4.35-4.57v-3.584"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.084 10.465-1.652 1.652-1.643-1.642"
    />
  </Svg>
);
export default IconlystForward5s2Broken;
