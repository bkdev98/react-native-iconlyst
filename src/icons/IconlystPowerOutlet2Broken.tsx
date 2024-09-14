import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutlet2Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.313 13.076a4.84 4.84 0 0 1-2.816 1.264 5.054 5.054 0 0 1-5.55-5.03V7.568c0-.62.502-1.122 1.12-1.122h7.865c.62 0 1.121.502 1.121 1.122v1.527c0 .524-.076 1.037-.219 1.525M10.459 3.137v3.309M15.541 3.137v3.309M17.54 21.137c0-.74-.612-1.341-1.367-1.341h-1.057c-1.166-.005-2.11-.93-2.116-2.072v-3.197"
    />
  </Svg>
);
export default IconlystPowerOutlet2Broken;
