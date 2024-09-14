import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightLineBold = ({
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
      d="M11.065 18.003a1.124 1.124 0 0 1-.793-1.922l2.97-2.957H4.125a1.125 1.125 0 1 1 0-2.25h9.115l-2.97-2.958a1.125 1.125 0 1 1 1.59-1.594l4.866 4.85a1.14 1.14 0 0 1 .362.83c0 .298-.119.585-.33.797l-4.9 4.875c-.218.22-.506.329-.793.329M19.875 19.046a1.125 1.125 0 0 1-1.125-1.125V6.08a1.124 1.124 0 1 1 2.25 0v11.84c0 .62-.503 1.125-1.125 1.125"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightLineBold;
