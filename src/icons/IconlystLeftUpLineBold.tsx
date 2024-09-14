import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftUpLineBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.702 14.656c-.288 0-.576-.11-.795-.33L8.427 6.85l.01 5.045a1.125 1.125 0 0 1-1.124 1.126h-.001a1.124 1.124 0 0 1-1.125-1.122l-.014-7.72a1.12 1.12 0 0 1 .325-.843l.005-.005C6.714 3.12 7 3 7.298 3H7.3l7.767.016a1.125 1.125 0 0 1-.002 2.25h-.002l-5.046-.01 7.48 7.48a1.124 1.124 0 0 1-.795 1.92M18.652 21H5.348a1.125 1.125 0 0 1 0-2.25h13.304a1.125 1.125 0 0 1 0 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftUpLineBold;
