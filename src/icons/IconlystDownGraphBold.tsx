import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownGraphBold = ({
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
      d="M22.424 17.29a1 1 0 0 0 .076-.38V12a1 1 0 0 0-2 0v2.496l-6.067-6.063a1 1 0 0 0-1.414 0l-3.383 3.383-5.429-5.433a.999.999 0 1 0-1.414 1.414l6.136 6.14a1 1 0 0 0 1.414 0l3.383-3.383 5.36 5.356H16.59a1 1 0 1 0 0 2h4.91a1 1 0 0 0 .707-.293c.094-.094.167-.206.217-.327"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownGraphBold;
