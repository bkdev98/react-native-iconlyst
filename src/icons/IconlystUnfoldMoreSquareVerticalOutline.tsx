import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnfoldMoreSquareVerticalOutline = ({
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
      d="M21 6.433v11.081c0 1.56-.556 2.883-1.553 3.811-.991.923-2.357 1.401-3.886 1.401h-7.12c-1.528 0-2.894-.478-3.885-1.4-.997-.93-1.553-2.252-1.553-3.813V6.433c0-1.56.556-2.883 1.553-3.811.991-.923 2.357-1.4 3.886-1.4h7.12c1.529 0 2.894.48 3.885 1.403.997.93 1.553 2.25 1.553 3.808m-1.5 11.081V6.433c0-1.186-.415-2.094-1.076-2.71-.666-.622-1.645-1.001-2.863-1.001h-7.12c-1.218 0-2.197.377-2.863.998-.66.615-1.075 1.523-1.075 2.713v11.08c0 1.19.415 2.1 1.075 2.714.667.621 1.645 1 2.864 1h7.12c1.218 0 2.196-.379 2.863-1 .66-.614 1.075-1.523 1.075-2.713"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.47 10.53a.75.75 0 0 0 1.06 0L12 8.06l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06M8.47 13.47a.75.75 0 0 1 1.06 0L12 15.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnfoldMoreSquareVerticalOutline;
