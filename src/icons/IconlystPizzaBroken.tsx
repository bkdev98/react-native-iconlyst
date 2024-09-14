import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPizzaBroken = ({
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
      d="m3.302 7.652 7.003 12.204c.738 1.285 2.591 1.288 3.333.005l7.056-12.205c.74-1.277.078-2.889-1.331-3.328q-7.364-2.3-14.726.002c-1.406.44-2.068 2.045-1.335 3.322"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.393 8.128c-.087-.037-.174-.074-.272-.112q-4.735-1.581-9.473-1.317M3.604 8.128c.087-.037.174-.074.273-.112A27 27 0 0 1 7.8 7.024"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.625 10.4a1.297 1.297 0 1 1-2.594 0 1.297 1.297 0 0 1 2.594 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.143 18.988a2.73 2.73 0 0 1-1.816-2.567c0-1.257.852-2.308 2.009-2.62M9.695 14.878a2.43 2.43 0 0 0-2.423-2.423c-.384 0-.753.09-1.08.262M16.057 9.664l.108 1.713M7.17 9.664l1.456.371"
    />
  </Svg>
);
export default IconlystPizzaBroken;
