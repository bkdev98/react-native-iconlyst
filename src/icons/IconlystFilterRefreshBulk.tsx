import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterRefreshBulk = ({
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
      d="M19.076 3.483h-.778c-.23 0-.377.251-.28.46.329.717.514 1.51.514 2.35 0 .792-.369 1.497-.944 1.955a.35.35 0 0 0-.132.29 2.5 2.5 0 0 1-.84 2.002 5.66 5.66 0 0 1-3.75 1.418A5.673 5.673 0 0 1 7.2 6.292c0-.792.37-1.497.944-1.955a.36.36 0 0 0 .133-.291 2 2 0 0 1 .002-.208c.011-.186-.128-.355-.314-.355h-1.08A3.19 3.19 0 0 0 3.7 6.668v2.05c0 1.14.444 2.213 1.273 3.04l4.343 3.867c.198.197.306.46.306.735v3.225a2.04 2.04 0 0 0 2.793 1.894l1.882-.749a2.03 2.03 0 0 0 1.285-1.894v-1.99c0-.294.125-.574.361-.787l4.907-4.855a4.28 4.28 0 0 0 1.413-3.173V6.668a3.19 3.19 0 0 0-3.186-3.185"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m10.43 4.587 1.56.791a.75.75 0 0 0 .679-1.338l-.244-.123q.217-.04.442-.041a2.42 2.42 0 0 1 2.416 2.416.75.75 0 1 0 1.5 0 3.92 3.92 0 0 0-3.916-3.916c-.957 0-1.876.348-2.592.98a.75.75 0 0 0 .156 1.231M15.457 9.228a3.9 3.9 0 0 1-2.59.98A3.92 3.92 0 0 1 8.95 6.292a.75.75 0 0 1 1.5 0 2.42 2.42 0 0 0 2.856 2.375l-.244-.123a.75.75 0 0 1 .68-1.338l1.56.791a.752.752 0 0 1 .155 1.231"
    />
  </Svg>
);
export default IconlystFilterRefreshBulk;
