import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDriveAiTwoTone = ({
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
      d="M3.518 9.361h4.523l.905-1.008a2 2 0 0 1 1.489-.665h3.131a2 2 0 0 1 1.49.665l.904 1.008h4.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 1 0-9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.222 13.593c4.783 0 6.77 2.517 6.77 7.166"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.754 14.498.126.342a4.7 4.7 0 0 0 2.779 2.782l.34.127-.34.127a4.7 4.7 0 0 0-2.779 2.782l-.126.342-.127-.342a4.7 4.7 0 0 0-2.778-2.783l-.342-.126.342-.127a4.7 4.7 0 0 0 2.778-2.782zM12.25 11.603c.261.86.934 1.534 1.793 1.796a2.7 2.7 0 0 0-1.793 1.796 2.7 2.7 0 0 0-1.794-1.796 2.7 2.7 0 0 0 1.794-1.796"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDriveAiTwoTone;
