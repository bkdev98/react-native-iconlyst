import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTagOutline = ({
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
      fill={props.color}
      d="M13.01 21.74a3.8 3.8 0 0 1-2.686-1.129q-3.1-3.087-6.184-6.185a5.35 5.35 0 0 1-1.583-3.355c-.067-.714-.056-2.672-.04-4.45l.004-.654a3.75 3.75 0 0 1 3.08-3.652c.215-.039 1.023-.069 4.8-.053h.317a5.52 5.52 0 0 1 4.02 1.671q3.069 3.065 6.13 6.132a3.745 3.745 0 0 1 .024 5.335 859 859 0 0 1-5.236 5.235 3.75 3.75 0 0 1-2.646 1.104M9.498 3.76c-1.386 0-3.386.005-3.663.035a2.26 2.26 0 0 0-1.814 2.175l-.005.662c-.01 1.17-.03 3.6.034 4.3a3.84 3.84 0 0 0 1.154 2.435q3.081 3.1 6.18 6.18a2.24 2.24 0 0 0 3.221.02 787 787 0 0 0 5.225-5.224 2.235 2.235 0 0 0-.02-3.22q-3.06-3.07-6.128-6.13a4.01 4.01 0 0 0-2.96-1.233z"
    />
    <Path
      fill={props.color}
      d="M8.554 10.656a2.353 2.353 0 1 1 .032-4.7h.01a2.3 2.3 0 0 1 1.629.689 2.36 2.36 0 0 1 .69 1.684 2.35 2.35 0 0 1-2.361 2.327m.027-3.2a.853.853 0 0 0-.876.862c.001.22.09.43.247.586a.85.85 0 0 0 .6.255.86.86 0 0 0 .856-.836.88.88 0 0 0-.255-.623.93.93 0 0 0-.57-.247z"
    />
  </Svg>
);
export default IconlystTagOutline;
