import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceIncreaseBold = ({
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
      d="M13.945 14.323a.751.751 0 0 1 1.048 1.074l-2.466 2.406a.7.7 0 0 1-.232.156l-.005.003h-.002a.8.8 0 0 1-.274.057h-.027a.8.8 0 0 1-.267-.053l-.013-.006a.7.7 0 0 1-.233-.157l-2.466-2.406a.75.75 0 0 1 1.047-1.074l1.195 1.166V8.511l-1.195 1.166a.75.75 0 1 1-1.047-1.075l2.466-2.406a.7.7 0 0 1 .236-.158h.001a.8.8 0 0 1 .276-.058h.027a.8.8 0 0 1 .266.054l.013.006a.7.7 0 0 1 .234.156l2.466 2.406a.751.751 0 0 1-1.048 1.075L12.75 8.511v6.978zM16.218 2.5H7.783C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.283 5.531h8.434c3.16 0 5.283-2.223 5.283-5.531V8.03c0-3.308-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpaceIncreaseBold;
