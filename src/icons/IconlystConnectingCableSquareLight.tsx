import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableSquareLight = ({
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
      d="M7.125 17.01a3.02 3.02 0 0 1 0-4.27l.672-.672a.6.6 0 0 1 .846 0l3.425 3.425a.6.6 0 0 1 0 .847l-.671.67a3.02 3.02 0 0 1-4.272 0M7.123 17.013 4.386 19.75M16.874 7.26a3.02 3.02 0 0 0-4.272 0l-.671.672a.6.6 0 0 0 0 .847l3.425 3.425a.6.6 0 0 0 .847 0l.671-.671a3.02 3.02 0 0 0 0-4.272M16.878 7.26l2.76-2.76M9.242 12.668l1.323-1.323m.905 3.551 1.324-1.323"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.137h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.027-4.784 5.027H7.782C4.834 21.137 3 19.055 3 16.11V8.163c0-2.945 1.843-5.026 4.782-5.026"
    />
  </Svg>
);
export default IconlystConnectingCableSquareLight;
