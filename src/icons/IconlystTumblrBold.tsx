import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTumblrBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.799 16.099c.324 0 .63-.126.861-.354a.75.75 0 1 1 1.054 1.067 2.7 2.7 0 0 1-1.915.787 2.43 2.43 0 0 1-2.427-2.431v-3.66h-1a.75.75 0 0 1 0-1.5c.55 0 .997-.445 1-.994v-.885a.75.75 0 0 1 1.5 0v.245l.001.005v.63l-.001.009v.99h2.316a.75.75 0 0 1 0 1.5h-2.316v3.63c0 .543.416.96.927.96m3.418-13.09H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTumblrBold;
