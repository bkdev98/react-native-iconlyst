import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallRingingLight = ({
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
      d="M11.123 12.7c3.703 3.702 4.803-.842 7.16 1.513 2.275 2.273 3.58 2.728.701 5.607-.362.29-2.653 3.778-10.707-4.275C.222 7.493 3.707 5.2 3.997 4.838c2.886-2.887 3.334-1.574 5.607.7 2.356 2.356-2.185 3.46 1.519 7.161"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.465 6.47a4.11 4.11 0 0 1 3.249 3.25M14.465 3.182a7.4 7.4 0 0 1 6.534 6.527"
    />
  </Svg>
);
export default IconlystCallRingingLight;
