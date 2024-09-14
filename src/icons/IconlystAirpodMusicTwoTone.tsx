import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodMusicTwoTone = ({
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
      d="M15.356 6.492v1.387m-2.902.43c0 .456.135.908.41 1.27a4.48 4.48 0 0 0 3.551 1.746h1.143v6.35a1.583 1.583 0 1 0 3.167 0V7.386c0-2.408-2.335-4.494-4.743-4.383a4.17 4.17 0 0 0-3.116 1.653 2.1 2.1 0 0 0-.412 1.273z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.008 21a2.78 2.78 0 1 0 0-5.558 2.78 2.78 0 0 0 0 5.558"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.787 18.22v-6.846s.722 1.88 2.666 2.275M5.151 11.129a1.65 1.65 0 1 0 0-3.302 1.65 1.65 0 0 0 0 3.302"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.8 9.478.002-4.063s.429 1.115 1.583 1.35"
    />
  </Svg>
);
export default IconlystAirpodMusicTwoTone;
