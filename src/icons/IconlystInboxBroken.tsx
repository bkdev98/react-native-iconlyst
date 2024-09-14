import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.019 3.147c2.948 0 4.782 2.088 4.782 5.043v7.975c0 2.955-1.834 5.043-4.783 5.043H8.584c-2.948 0-4.783-2.088-4.783-5.043V8.19c0-2.955 1.844-5.043 4.783-5.043h4.951"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.795 12.625h-4.284c-.887 0-1.697.504-2.09 1.301a2.92 2.92 0 0 1-5.24 0 2.33 2.33 0 0 0-2.09-1.301H6.609"
    />
  </Svg>
);
export default IconlystInboxBroken;
