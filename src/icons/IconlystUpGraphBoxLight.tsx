import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphBoxLight = ({
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
      d="M21.319 6.586s-.01 0 0-.01m-4.601-3.458H8.283C5.343 3.118 3.5 5.2 3.5 8.145v7.947c0 2.945 1.835 5.026 4.783 5.026h8.434c2.949 0 4.783-2.081 4.783-5.026V8.145c0-2.946-1.834-5.027-4.782-5.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.678 17.582 6.567-7.502 4.213 3.756 6.86-7.25"
    />
  </Svg>
);
export default IconlystUpGraphBoxLight;
