import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArdorOutline = ({
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
      d="M7.682 20.564H3.25a.75.75 0 0 1-.647-1.13l9.172-15.63a.75.75 0 0 1 .647-.37h.006a.75.75 0 0 1 .647.382l2.132 3.777a.75.75 0 0 1-.005.744L8.332 20.19a.75.75 0 0 1-.65.374m-3.122-1.5h2.69l6.44-11.108-1.28-2.268z"
    />
    <Path
      fill={props.color}
      d="M21.249 20.562h-4.431a.75.75 0 0 1-.657-.388l-3.685-6.688a.75.75 0 0 1 .234-.982l3.132-2.138a.75.75 0 0 1 1.076.25l4.984 8.827a.75.75 0 0 1-.653 1.119m-3.987-1.5h2.7l-3.951-7-1.895 1.294z"
    />
    <Path
      fill={props.color}
      d="M10.541 15.636a.749.749 0 0 1-.422-1.37l2.591-1.761a.75.75 0 0 1 .844 1.24l-2.593 1.76a.74.74 0 0 1-.42.13M7.705 20.56a.75.75 0 0 1-.388-1.392L14.07 15.1a.748.748 0 0 1 1.129.53.75.75 0 0 1-.355.755l-6.753 4.069a.75.75 0 0 1-.386.107"
    />
  </Svg>
);
export default IconlystArdorOutline;
