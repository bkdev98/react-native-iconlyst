import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquareBold = ({
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
      d="M17.708 14.54a.75.75 0 0 1-1.5 0v-2.631a4.212 4.212 0 0 0-5.833-3.885.749.749 0 1 1-.567-1.388 5.8 5.8 0 0 1 2.194-.436 5.715 5.715 0 0 1 5.706 5.709zM12.75 12.3v2.13a.75.75 0 0 1-1.5 0V12.3a.75.75 0 0 1 1.5 0m2.33 1.38a.75.75 0 0 1-1.5 0v-1.76c0-.871-.708-1.58-1.578-1.58s-1.578.709-1.578 1.58v2.8c0 .871.708 1.58 1.578 1.58a.75.75 0 0 1 0 1.5 3.083 3.083 0 0 1-3.078-3.08v-2.8a3.083 3.083 0 0 1 3.078-3.08 3.083 3.083 0 0 1 3.078 3.08zm-6.5-4.247a4.3 4.3 0 0 0-.793 2.497v3.639a.75.75 0 0 1-1.5 0V11.93c0-1.211.369-2.373 1.067-3.363a.75.75 0 0 1 1.226.866M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdSquareBold;
