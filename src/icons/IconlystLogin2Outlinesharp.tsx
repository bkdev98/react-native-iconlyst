import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogin2Outlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.554 22.639v-6.125h1.5v4.625h9.929v-17h-9.929v4.625h-1.5V2.639h12.929v20z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.457 13.389H3.016v-1.5h15.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.706 11.889c-2.945 0-5.345 2.585-5.345 5.345v.75h1.5v-.75c0-1.964 1.76-3.845 3.845-3.845h.75v-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.706 13.389c-2.945 0-5.345-2.585-5.345-5.346v-.75h1.5v.75c0 1.965 1.76 3.846 3.845 3.846h.75v1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogin2Outlinesharp;
