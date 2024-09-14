import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntoUserLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.676 14.875c-3.375 0-6.254.51-6.254 2.553s2.862 2.571 6.254 2.571c3.374 0 6.255-.512 6.255-2.553 0-2.043-2.862-2.571-6.255-2.571M13.672 7.996a3.996 3.996 0 1 1-7.991 0 3.996 3.996 0 0 1 7.99 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.354 11.74h4.525m-4.526 0 1.826-1.818m-1.825 1.818 1.825 1.817"
    />
  </Svg>
);
export default IconlystIntoUserLight;
