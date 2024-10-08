import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path d="M12.012 14.83c-1.605 0-2.902-1.25-2.902-2.82s1.297-2.83 2.902-2.83c1.604 0 2.872 1.26 2.872 2.83s-1.268 2.82-2.872 2.82" />
      <Path
        d="M21.23 14.37c-.194-.3-.47-.6-.828-.79-.286-.14-.47-.37-.633-.64-.522-.86-.215-1.99.654-2.5a2.027 2.027 0 0 0 .756-2.83l-.685-1.18a2.11 2.11 0 0 0-2.871-.76c-.9.48-2.055.16-2.576-.69-.163-.28-.255-.58-.235-.88.03-.39-.092-.76-.276-1.06A2.15 2.15 0 0 0 12.717 2h-1.44c-.747.02-1.432.42-1.81 1.04-.194.3-.306.67-.286 1.06.02.3-.071.6-.235.88-.521.85-1.676 1.17-2.565.69a2.124 2.124 0 0 0-2.882.76l-.685 1.18c-.582.99-.255 2.26.757 2.83.868.51 1.175 1.64.664 2.5-.174.27-.358.5-.644.64-.347.19-.654.49-.818.79-.378.62-.357 1.4.02 2.05l.706 1.2a2.13 2.13 0 0 0 1.82 1.04c.347 0 .755-.1 1.082-.3.256-.17.563-.23.9-.23 1.011 0 1.86.83 1.88 1.82 0 1.15.94 2.05 2.126 2.05h1.39c1.175 0 2.115-.9 2.115-2.05.03-.99.879-1.82 1.89-1.82.328 0 .634.06.9.23.327.2.726.3 1.083.3.726 0 1.431-.4 1.81-1.04l.715-1.2c.367-.67.398-1.43.02-2.05"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystSettingBulk;
