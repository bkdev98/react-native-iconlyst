import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerAiLight = ({
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
      d="M21 13.787V7.782C21 4.842 18.919 3 15.974 3H8.026C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h.917M11.13 12H3.023M7.363 16.135h.523M7.363 7.865h.523m4.216 0h4.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.513 19.758-.101-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.221 2.225zM19.823 21a1.77 1.77 0 0 0-1.176-1.179 1.77 1.77 0 0 0 1.176-1.178A1.77 1.77 0 0 0 21 19.821 1.77 1.77 0 0 0 19.823 21"
    />
  </Svg>
);
export default IconlystServerAiLight;
