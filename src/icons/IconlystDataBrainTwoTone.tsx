import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDataBrainTwoTone = ({
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
      d="M9.847 14.618h2.363m2.608 0h.334m0-5.235h-2.638m-2.32 0h-.346M8.794 12h7.412"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.5 6.402V5.355A2.25 2.25 0 0 0 10.26 3.1a2.246 2.246 0 0 0-2.234 2.103 2.9 2.9 0 0 0-.868-.134 2.893 2.893 0 0 0-2.883 2.903c0 .728.265 1.392.705 1.902A2.16 2.16 0 0 0 3.5 11.93c0 .965.628 1.782 1.494 2.06a2.9 2.9 0 0 0-.719 1.918 2.893 2.893 0 0 0 2.883 2.903c.3 0 .59-.046.862-.132a2.247 2.247 0 0 0 2.24 2.22c1.237 0 2.24-1.009 2.24-2.254V17.63" />
      <Path d="M12.5 6.392V5.356A2.25 2.25 0 0 1 14.74 3.1c1.225 0 2.221.991 2.24 2.22q.41-.13.861-.131c1.593 0 2.884 1.3 2.884 2.903 0 .735-.271 1.406-.72 1.918a2.16 2.16 0 0 1 1.495 2.06c0 .96-.62 1.773-1.48 2.056.44.51.705 1.174.705 1.902a2.893 2.893 0 0 1-2.884 2.903c-.301 0-.593-.047-.867-.134A2.246 2.246 0 0 1 14.74 20.9a2.25 2.25 0 0 1-2.24-2.255v-.982" />
    </G>
  </Svg>
);
export default IconlystDataBrainTwoTone;
