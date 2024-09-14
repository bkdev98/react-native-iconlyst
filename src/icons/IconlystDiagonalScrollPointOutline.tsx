import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiagonalScrollPointOutline = ({
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
      fill="#141B34"
      fillRule="evenodd"
      d="M12.846 11.154a1.196 1.196 0 1 0-1.691 1.691 1.196 1.196 0 0 0 1.69-1.691m-2.752-1.06a2.696 2.696 0 1 1 3.812 3.812 2.696 2.696 0 0 1-3.812-3.813M18.364 12.798a.75.75 0 0 1 .75.75v4.816a.75.75 0 0 1-.75.75h-4.816a.75.75 0 1 1 0-1.5h4.066v-4.066a.75.75 0 0 1 .75-.75M4.886 5.636a.75.75 0 0 1 .75-.75h4.816a.75.75 0 0 1 0 1.5H6.386v4.066a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiagonalScrollPointOutline;
