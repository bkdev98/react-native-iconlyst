import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReel2Bulk = ({
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
      d="M22.58 11.785c0 5.02-4.08 9.1-9.09 9.1a8.9 8.9 0 0 1-2.97-.5q-.855-.285-1.62-.75a9.07 9.07 0 0 1-4.51-7.85c0-5.01 4.08-9.09 9.1-9.09 5.01 0 9.09 4.08 9.09 9.09"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.487 6.219c-.894 0-1.622.727-1.622 1.62 0 .899.728 1.63 1.622 1.63s1.622-.731 1.622-1.63c0-.893-.727-1.62-1.622-1.62M13.487 14.1c-.894 0-1.622.727-1.622 1.619a1.623 1.623 0 0 0 3.244 0c0-.892-.727-1.62-1.622-1.62M9.548 10.158c-.895 0-1.622.727-1.622 1.62 0 .9.727 1.63 1.622 1.63s1.622-.73 1.622-1.63c0-.893-.727-1.62-1.622-1.62M17.425 10.158c-.894 0-1.622.727-1.622 1.62 0 .9.728 1.63 1.622 1.63s1.622-.73 1.622-1.63c0-.893-.727-1.62-1.622-1.62M10.52 20.382c-.45.38-1.29.92-2.37.92-.97 0-1.55-.42-1.98-.72-.28-.2-.46-.32-.68-.35-.6-.09-1.16.38-1.17.39-.31.26-.79.23-1.05-.09a.744.744 0 0 1 .07-1.05c.11-.09 1.09-.91 2.35-.74.59.08 1.01.38 1.35.62.36.25.62.44 1.11.44.27 0 .53-.07.75-.17q.765.465 1.62.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieReel2Bulk;
