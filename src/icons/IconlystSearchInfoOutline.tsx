import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchInfoOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.882 3.75a7.668 7.668 0 1 0 5.191 13.31l.008-.006.049-.045A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.859 7.188l2.933 2.925a.75.75 0 1 0 1.06-1.062zM11.878 7.21a.75.75 0 0 1 .75.75v.078a.75.75 0 0 1-1.5 0V7.96a.75.75 0 0 1 .75-.75m.005 2.892a.75.75 0 0 1 .75.75v4.026a.75.75 0 0 1-1.5 0V10.85a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchInfoOutline;