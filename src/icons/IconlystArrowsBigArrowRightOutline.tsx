import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowRightOutline = ({
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
      d="m13.752 6.138 6.434 5.719a.192.192 0 0 1 0 .286l-6.434 5.719v-3.037a.75.75 0 0 0-.75-.75H7.393a.19.19 0 0 1-.191-.192v-3.766c0-.106.085-.192.191-.192h5.609a.75.75 0 0 0 .75-.75zm-1.5-.622c0-1.053 1.244-1.612 2.032-.912l6.898 6.132a1.69 1.69 0 0 1 0 2.528l-6.898 6.132c-.788.7-2.032.141-2.032-.912v-2.91H7.393a1.69 1.69 0 0 1-1.691-1.69v-3.767c0-.934.757-1.692 1.691-1.692h4.859zM3 8.443a.75.75 0 0 1 .75.75v5.614a.75.75 0 0 1-1.5 0V9.193a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowRightOutline;
