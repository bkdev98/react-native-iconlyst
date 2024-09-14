import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDiscountOutline = ({
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
      d="M11.887 3.75a7.673 7.673 0 1 0 5.13 13.377.8.8 0 0 1 .182-.168A7.673 7.673 0 0 0 11.887 3.75m6.79 13.839a9.173 9.173 0 1 0-1.096 1.025l2.924 2.917a.75.75 0 1 0 1.06-1.062zm-4.094-8.862a.75.75 0 0 1 0 1.06l-4.33 4.33a.75.75 0 1 1-1.06-1.06l4.33-4.33a.75.75 0 0 1 1.06 0m-5.553.588a.75.75 0 0 1 .75-.75h.054a.75.75 0 0 1 0 1.5H9.78a.75.75 0 0 1-.75-.75m4.196 4.212a.75.75 0 0 1 .75-.75h.069a.75.75 0 0 1 0 1.5h-.07a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDiscountOutline;
