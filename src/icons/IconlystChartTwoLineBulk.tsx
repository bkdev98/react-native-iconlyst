import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartTwoLineBulk = ({
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
      d="M16.217 2.5H7.783C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.283 5.53h8.433c3.161 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.922 15.51c0 1.08-.879 1.96-1.96 1.96a1.96 1.96 0 0 1-1.96-1.96V8.5c0-1.082.878-1.96 1.96-1.96s1.96.878 1.96 1.96zm-2.42-7.01a.46.46 0 0 1 .92 0v7.01a.46.46 0 0 1-.92 0zM11 15.51c0 1.08-.88 1.96-1.96 1.96a1.96 1.96 0 0 1-1.96-1.96v-4.07a1.962 1.962 0 0 1 3.92 0zm-2.42-4.071c0-.25.21-.46.46-.46s.46.21.46.46v4.07a.46.46 0 0 1-.92 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartTwoLineBulk;
