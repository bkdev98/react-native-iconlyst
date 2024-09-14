import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleOutline = ({
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
      d="M8.423 6.063a.75.75 0 0 1 .75-.75h4.294a4.011 4.011 0 0 1 0 8.024H9.923v4.726a.75.75 0 0 1-1.5 0v-4.726h-.65a.75.75 0 0 1 0-1.5h.65zm1.5 5.774h3.543a2.513 2.513 0 0 0 0-5.024H9.924z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.025 15.514a.75.75 0 0 1 .75-.75h3.762a.75.75 0 0 1 0 1.5H7.775a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRubleOutline;
