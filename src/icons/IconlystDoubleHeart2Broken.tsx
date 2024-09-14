import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart2Broken = ({
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
      d="M3.719 14.383c-.632-1.968.108-4.221 2.17-4.892a3.56 3.56 0 0 1 1.652-.112c.551.094 1.073.473 1.523.807.449-.337.971-.718 1.524-.812a3.5 3.5 0 0 1 1.652.117c2.063.665 2.796 2.924 2.165 4.892-1.034 3.16-5.34 5.165-5.34 5.165s-2.376-1.11-4.015-2.944"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.158 9.34c-.05-2.042.988-4.001 3.078-4.675a4.56 4.56 0 0 1 2.132-.14c.708.114 1.383.609 1.959 1.037.585-.437 1.251-.923 1.967-1.046a4.6 4.6 0 0 1 2.132.149c1.423.457 2.356 1.505 2.79 2.77M21.216 10.978c-1.333 4.074-6.89 6.659-6.89 6.659s-.768-.397-1.468-.809"
    />
  </Svg>
);
export default IconlystDoubleHeart2Broken;
