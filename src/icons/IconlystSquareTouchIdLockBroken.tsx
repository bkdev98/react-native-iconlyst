import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdLockBroken = ({
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
      d="M12.57 20.76H8.09c-2.91 0-4.72-2.053-4.72-4.958V11.88M21.13 11.961V7.959C21.13 5.053 19.32 3 16.411 3H8.09C5.19 3 3.37 5.053 3.37 7.959"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.321 9.72a4.51 4.51 0 0 1 3.93-2.286 4.5 4.5 0 0 1 1.74.347M15.942 9.348a4.5 4.5 0 0 1 .77 1.89M13.992 13.788v-1.673a1.78 1.78 0 0 0-3.56 0v.477M7.733 15.307v-2.8M10.433 16.329v-1.602M16.8 21.001a1.29 1.29 0 0 1-1.291-1.292v-1.461a1.29 1.29 0 0 1 1.29-1.291h2.605c.713 0 1.292.577 1.292 1.291v1.461c0 .713-.58 1.292-1.292 1.292"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.658 16.982v-.928a1.554 1.554 0 0 0-3.108-.006v.934"
    />
  </Svg>
);
export default IconlystSquareTouchIdLockBroken;
