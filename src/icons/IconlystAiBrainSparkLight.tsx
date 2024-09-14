import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainSparkLight = ({
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
      strokeWidth={1.5}
      d="M15.187 19.315c-.99.52-1.297 2.186-1.297 2.186M11.51 2.503c1.877-.041 3.658.286 5.125 1.523 1.883 1.588 2.984 3.532 2.414 6.115-.304 1.378.702 2.942 1.414 3.9a.75.75 0 0 1-.334 1.174l-.928.358a.83.83 0 0 0-.517.618l-.31 2.644c-.103.685-.686 1.011-1.338.874l-2.785-.628c-.91-.2-.87-1.024-1.108-1.886M4.309 12.863c1.455 2.605 2.127 5.568.884 8.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.353 8.318-.1-.273A3.76 3.76 0 0 0 3.03 5.82l-.273-.101.273-.102a3.76 3.76 0 0 0 2.221-2.224l.101-.274.101.274a3.76 3.76 0 0 0 2.222 2.224l.273.102-.273.1a3.76 3.76 0 0 0-2.222 2.226zM11.19 9.752a1.77 1.77 0 0 0-1.176-1.179 1.77 1.77 0 0 0 1.176-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179"
    />
  </Svg>
);
export default IconlystAiBrainSparkLight;
