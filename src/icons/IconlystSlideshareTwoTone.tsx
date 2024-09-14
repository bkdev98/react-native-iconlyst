import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideshareTwoTone = ({
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
      d="M4.63 9.374V7.116C4.63 4.704 6.14 3 8.548 3h6.906c2.414 0 3.917 1.704 3.917 4.116v2.258"
      opacity={0.4}
    />
    <Circle
      cx={14.833}
      cy={10.132}
      r={1.542}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.785 12.293c-1.94 1.575-3.227 1.63-5.555 1.863-.529.054-.923.605-.931 1.186-.02 1.413.005 2.821-.002 4.235-.01.71.576 1.354 1.28 1.42 4.083.163 3.537-4.587 2.663-7.295M4.215 12.293c1.94 1.575 3.227 1.63 5.555 1.863.529.054.923.605.931 1.186.02 1.413-.005 2.821.002 4.235.01.71-.576 1.354-1.28 1.42-.648.025-1.02-.022-1.611-.327-1.894-.859-3.01-3.981-.835-6.908"
    />
    <Circle
      cx={1.542}
      cy={1.542}
      r={1.542}
      stroke={props.color}
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 10.709 8.59)"
    />
  </Svg>
);
export default IconlystSlideshareTwoTone;
