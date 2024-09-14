import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectedBroken = ({
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
      d="M9.6 3.473h5.75a2.843 2.843 0 0 1 0 5.685H5.897a2.842 2.842 0 1 1 0-5.685h.897"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.053 12a2.84 2.84 0 0 1 2.843-2.842h9.455a2.842 2.842 0 1 1 0 5.685H9.6M11.646 20.53h-5.75a2.843 2.843 0 0 1 0-5.684h9.455a2.842 2.842 0 1 1 0 5.685h-.897M11.592 6.307h2.26M6.662 6.307h.01M11.592 12.002h2.26M6.662 12.002h.01M11.592 17.686h2.26M6.662 17.686h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.193 6.316h.948c1.046 0 1.895.849 1.895 1.895v1.895A1.895 1.895 0 0 1 19.14 12h-.948"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.194 12h.947c1.046 0 1.895.848 1.895 1.895v1.895a1.895 1.895 0 0 1-1.895 1.894h-.947"
    />
  </Svg>
);
export default IconlystServerConnectedBroken;
