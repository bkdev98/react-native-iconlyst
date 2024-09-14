import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableSquareBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.125 17.01a3.02 3.02 0 0 1 0-4.27l.672-.672a.6.6 0 0 1 .846 0l3.425 3.425a.6.6 0 0 1 0 .847l-.671.67a3.02 3.02 0 0 1-4.272 0M7.123 17.013 4.386 19.75M11.931 8.78l3.425 3.426a.6.6 0 0 0 .847 0l.672-.672a3.02 3.02 0 0 0-3.265-4.938M16.878 7.26l2.76-2.76M9.242 12.668l1.323-1.323m.905 3.551 1.324-1.323"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.216 21.137c2.949 0 4.784-2.082 4.784-5.027V8.163c0-2.945-1.835-5.026-4.783-5.026H7.782C4.842 3.137 3 5.217 3 8.163v7.947c0 2.945 1.834 5.027 4.782 5.027H12"
    />
  </Svg>
);
export default IconlystConnectingCableSquareBroken;
