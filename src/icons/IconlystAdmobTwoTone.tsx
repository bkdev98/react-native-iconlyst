import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdmobTwoTone = ({
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
      d="M11.526 8.21h.948a3.79 3.79 0 0 1 3.79 3.789v6.158a2.368 2.368 0 0 0 4.736 0v-6.158a8.526 8.526 0 0 0-8.526-8.526h-.948"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.526 8.21a3.79 3.79 0 0 0-3.79 3.789v0a3.79 3.79 0 0 0 3.79 3.79v0a2.368 2.368 0 1 1 0 4.736v0A8.526 8.526 0 0 1 3 12v0a8.526 8.526 0 0 1 8.526-8.526v0a2.368 2.368 0 1 1 0 4.737"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 18.158a2.368 2.368 0 1 0-4.737 0m0-.002a2.368 2.368 0 1 0 4.737 0"
    />
  </Svg>
);
export default IconlystAdmobTwoTone;
