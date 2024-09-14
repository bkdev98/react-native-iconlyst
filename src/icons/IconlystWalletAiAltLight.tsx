import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAiAltLight = ({
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
      d="M19.252 14.403v.817a4.7 4.7 0 0 1-4.704 4.695H7.703A4.7 4.7 0 0 1 3 15.22v-3.968m7.48-7.168h4.068a4.704 4.704 0 0 1 4.704 4.704v.796"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.14 14.41h-4.164a1.86 1.86 0 0 1-1.861-1.86v-1.098a1.86 1.86 0 0 1 1.86-1.86h4.165a1.86 1.86 0 0 1 1.86 1.86v1.098a1.86 1.86 0 0 1-1.86 1.86"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.596 8.558-.101-.273A3.76 3.76 0 0 0 3.273 6.06L3 5.959l.273-.102a3.76 3.76 0 0 0 2.222-2.224l.1-.274.102.274a3.76 3.76 0 0 0 2.221 2.224l.273.102-.273.1a3.76 3.76 0 0 0-2.221 2.226zM8.191 12.694a1.77 1.77 0 0 0-1.176-1.179 1.77 1.77 0 0 0 1.176-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179M15.327 12.002h.01"
    />
  </Svg>
);
export default IconlystWalletAiAltLight;
