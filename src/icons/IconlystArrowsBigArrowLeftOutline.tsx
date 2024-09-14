import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowLeftOutline = ({
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
      d="M9.716 4.604c.788-.7 2.032-.141 2.032.912v2.91h4.859c.934 0 1.691.757 1.691 1.691v3.766c0 .934-.757 1.692-1.691 1.692h-4.859v2.909c0 1.053-1.244 1.612-2.032.912l-6.898-6.132a1.69 1.69 0 0 1 0-2.528zm.532 1.534-6.434 5.719a.192.192 0 0 0 0 .286l6.434 5.719v-3.037a.75.75 0 0 1 .75-.75h5.609a.19.19 0 0 0 .191-.192v-3.766a.19.19 0 0 0-.191-.192h-5.609a.75.75 0 0 1-.75-.75zm.465-.413-.186-.209zM21 8.443a.75.75 0 0 1 .75.75v5.614a.75.75 0 0 1-1.5 0V9.193a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowLeftOutline;
