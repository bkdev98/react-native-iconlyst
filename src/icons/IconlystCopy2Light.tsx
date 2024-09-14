import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy2Light = ({
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
      d="M15.285 5.748C15.031 4.108 13.85 3 12.07 3H6.295C4.285 3 3.02 4.428 3.02 6.445v5.439c0 1.837 1.05 3.191 2.773 3.405"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.706 8.68h-5.773c-2.01 0-3.273 1.424-3.273 3.44v5.439c0 2.016 1.255 3.44 3.273 3.44h5.772c2.02 0 3.274-1.424 3.274-3.44v-5.44c0-2.015-1.255-3.44-3.273-3.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy2Light;
