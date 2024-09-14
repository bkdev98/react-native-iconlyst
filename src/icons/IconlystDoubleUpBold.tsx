import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleUpBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M6.156 10.356A1.142 1.142 0 1 0 7.88 11.86L12 7.132l4.121 4.727a1.144 1.144 0 0 0 1.723-1.503L12.86 4.642a1.142 1.142 0 0 0-1.722 0z"
    />
    <Path
      fill={props.color}
      d="M6.156 18.356a1.142 1.142 0 0 0 .877 1.894h10.012v-.002a1.145 1.145 0 0 0 .799-1.893l-4.983-5.713a1.142 1.142 0 0 0-1.722 0z"
    />
  </Svg>
);
export default IconlystDoubleUpBold;
