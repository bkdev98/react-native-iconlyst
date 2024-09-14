import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlipHorizontalOutline = ({
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
      d="M19.5 14.016a.75.75 0 0 1 .75.75v1.27a.75.75 0 0 1-.466.694l-14 5.73a.75.75 0 0 1-1.034-.694v-7a.75.75 0 0 1 .75-.75zm-.75 1.5H6.25v5.132l12.5-5.116zM19.5 11.516a.75.75 0 0 0 .75-.75v-1.27a.75.75 0 0 0-.466-.694l-14-5.73a.75.75 0 0 0-1.034.694v7c0 .414.336.75.75.75zm-.75-1.5H6.25V4.883l12.5 5.116z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlipHorizontalOutline;
