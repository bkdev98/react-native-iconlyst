import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodMusicBroken = ({
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
      d="M20.225 12.53v5.144a1.584 1.584 0 1 1-3.167 0v-6.348h-1.143a4.48 4.48 0 0 1-3.55-1.746 2.1 2.1 0 0 1-.41-1.27V5.93c0-.456.135-.909.411-1.273a4.17 4.17 0 0 1 3.116-1.653c2.408-.11 4.743 1.975 4.743 4.383v1.642M14.856 6.492V7.88M6.508 21a2.78 2.78 0 1 0 0-5.558 2.78 2.78 0 0 0 0 5.558"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.287 18.22v-6.846s.722 1.88 2.666 2.275M4.651 11.129a1.65 1.65 0 1 0 0-3.302 1.65 1.65 0 0 0 0 3.302"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.3 9.478.002-4.063s.429 1.115 1.583 1.35"
    />
  </Svg>
);
export default IconlystAirpodMusicBroken;
