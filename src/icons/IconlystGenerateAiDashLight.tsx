import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateAiDashLight = ({
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
      d="M5.488 6.094q-.534.634-.941 1.342M4.677 16.394a8.5 8.5 0 0 1-.784-1.646M10.421 20.435h.01a8.3 8.3 0 0 0 1.964.175M9.255 3.508c-.576.2-1.131.463-1.647.784M16.779 19.325a8.8 8.8 0 0 1-1.648.784M11.99 3.004a8.2 8.2 0 0 1 1.965.177c.92.18 1.801.517 2.603.982.483.27.937.582 1.35.94a8.6 8.6 0 0 1 1.802 2.11q.481.775.785 1.656a8.6 8.6 0 0 1 .501 2.735c.021.675-.04 1.317-.178 1.955l.002.01a8.4 8.4 0 0 1-.984 2.593 7.7 7.7 0 0 1-.94 1.351M7.826 19.443a8 8 0 0 1-1.34-.932M3.566 10.036a8.2 8.2 0 0 0-.176 1.974M10.054 8.78l.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.222 2.225l-.1.273-.102-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225zM15.365 12.864a1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.178 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178"
    />
  </Svg>
);
export default IconlystGenerateAiDashLight;
