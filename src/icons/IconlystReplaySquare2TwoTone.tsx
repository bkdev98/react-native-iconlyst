import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare2TwoTone = ({
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
      d="M16.715 3.256H8.284c-2.918 0-4.775 2.071-4.785 5.018v7.945c0 2.946 1.867 5.027 4.784 5.027h8.432c2.946 0 4.784-2.11 4.784-5.027V8.274c0-2.947-1.867-5.018-4.784-5.018"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.22 17.445-1.662-1.663 1.662-1.662"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.454 12.475v1.03a2.275 2.275 0 0 1-2.276 2.276h-5.62M14.79 7.035l1.662 1.663-1.663 1.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.556 12.006v-1.031a2.276 2.276 0 0 1 2.275-2.276h5.621"
    />
  </Svg>
);
export default IconlystReplaySquare2TwoTone;
