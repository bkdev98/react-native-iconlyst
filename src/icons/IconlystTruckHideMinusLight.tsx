import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckHideMinusLight = ({
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
      d="M9.126 18.175a1.916 1.916 0 1 0-3.832 0 1.916 1.916 0 0 0 3.832 0M18.265 18.175a1.916 1.916 0 1 0-3.831 0 1.916 1.916 0 0 0 3.831 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.294 18.175h-.056a2.08 2.08 0 0 1-2.078-2.079v-3.06M18.266 18.175h.806c1.147 0 2.077-.93 2.077-2.079v-3.441a2.36 2.36 0 0 0-1.408-2.16L16.35 8.999M18.75 13.404h2.4M9.125 18.174h5.308M16.349 16.259V7.977c0-1.148-.93-2.079-2.078-2.079h-1.084M7.008 11.624a3.858 3.858 0 1 0-.002-7.716 3.858 3.858 0 0 0 .002 7.716M5.79 7.767h2.436"
    />
  </Svg>
);
export default IconlystTruckHideMinusLight;
