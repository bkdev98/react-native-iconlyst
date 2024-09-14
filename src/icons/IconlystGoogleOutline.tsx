import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOutline = ({
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
      d="M12 3.75A8.253 8.253 0 0 0 3.75 12 8.253 8.253 0 0 0 12 20.25c4.016 0 7.367-2.878 8.102-6.682v-.003a8.1 8.1 0 0 0 .1-2.435H12.75v1.83h4.452a.75.75 0 0 1 .712.984A6.22 6.22 0 0 1 12 18.223 6.22 6.22 0 0 1 5.778 12a6.22 6.22 0 0 1 9.556-5.25l1.443-1.475A8.17 8.17 0 0 0 12 3.75M2.25 12c0-5.382 4.368-9.75 9.75-9.75 2.446 0 4.681.897 6.39 2.39a.75.75 0 0 1 .041 1.09L15.956 8.26a.75.75 0 0 1-1.007.058A4.72 4.72 0 0 0 7.279 12a4.72 4.72 0 0 0 4.721 4.722c1.71 0 3.204-.903 4.034-2.262H12a.75.75 0 0 1-.75-.75v-3.33a.75.75 0 0 1 .75-.75h8.848c.36 0 .67.257.736.61a9.637 9.637 0 0 1-.01 3.613C20.705 18.349 16.75 21.75 12 21.75c-5.382 0-9.75-4.368-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.154 5.068a.75.75 0 0 1 1.061.006l2.473 2.501A.75.75 0 0 1 7.62 8.63L5.148 6.129a.75.75 0 0 1 .006-1.06M8.312 14.967a.75.75 0 0 1 .006 1.06l-2.482 2.51a.75.75 0 1 1-1.067-1.054l2.483-2.51a.75.75 0 0 1 1.06-.006M15.32 15.357a.75.75 0 0 1 1.061.006l2.482 2.51a.75.75 0 0 1-1.067 1.055l-2.482-2.51a.75.75 0 0 1 .006-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOutline;
