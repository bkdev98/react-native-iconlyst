import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsAscendBroken = ({
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
      d="M11.97 14.352H7.93a.47.47 0 0 0-.47.47v3.46c0 .26-.21.47-.47.47H3M21 5.25h-4.04a.47.47 0 0 0-.47.47v3.54c0 .26-.21.47-.47.47h-3.58a.47.47 0 0 0-.47.47v1.22M7.92 5.25 3 10.17m4.92-4.92v3.12m0-3.12H4.81"
    />
  </Svg>
);
export default IconlystStairsAscendBroken;
