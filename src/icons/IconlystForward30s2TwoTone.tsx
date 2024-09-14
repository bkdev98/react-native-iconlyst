import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward30s2TwoTone = ({
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
      d="M19.7 15.613c0 2.678-1.667 4.57-4.348 4.57H7.684c-2.681 0-4.35-1.892-4.35-4.57V8.387c0-2.678 1.669-4.57 4.35-4.57h7.668c2.673 0 4.349 1.892 4.349 4.57v3.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.008 10.71a1.347 1.347 0 1 1 1.348 1.35 1.347 1.347 0 1 1-1.348 1.347"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.283 14.716a1.57 1.57 0 0 1-1.571-1.571v-2.167a1.571 1.571 0 1 1 3.143 0v2.167c0 .867-.704 1.57-1.572 1.57"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.334 10.465-1.652 1.652-1.643-1.642"
    />
  </Svg>
);
export default IconlystForward30s2TwoTone;
