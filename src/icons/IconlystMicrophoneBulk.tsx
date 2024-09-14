import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneBulk = ({
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
      d="M19.775 10.036c.38.02.751.333.752.748a7.92 7.92 0 0 1-2.322 5.644 7.9 7.9 0 0 1-4.885 2.311v2.136a.75.75 0 0 1-1.5 0V18.74a7.92 7.92 0 0 1-4.885-2.31 7.92 7.92 0 0 1-2.322-5.645.75.75 0 0 1 .75-.748h.002a.75.75 0 0 1 .748.752 6.43 6.43 0 0 0 1.885 4.582 6.43 6.43 0 0 0 9.144 0 6.43 6.43 0 0 0 1.885-4.582.75.75 0 0 1 .748-.752"
    />
    <Path
      fill={props.color}
      d="M12.572 14.932a4.166 4.166 0 0 0 4.122-3.725l.036-2.109v-.907l-.038-2.11a4.155 4.155 0 0 0-4.121-3.706 4.164 4.164 0 0 0-4.16 4.159v4.222a4.17 4.17 0 0 0 4.16 4.176"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.43 9.398h-2.893a.75.75 0 0 0 0 1.5h2.869c.152 0 .278.114.29.26l.033-2.05a.3.3 0 0 1-.3.29M16.404 6.391h-1.967a.75.75 0 0 0 0 1.5h1.993a.3.3 0 0 1 .3.29l-.037-2.05a.286.286 0 0 1-.289.26"
    />
  </Svg>
);
export default IconlystMicrophoneBulk;
