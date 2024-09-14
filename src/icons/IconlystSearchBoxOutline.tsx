import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBoxOutline = ({
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
      d="M11.885 16.15c-.306 0-.613-.079-.887-.24l-2.454-1.409a1.79 1.79 0 0 1-.887-1.54v-2.83c0-.64.339-1.22.887-1.54l2.454-1.42.004.007a1.78 1.78 0 0 1 1.77-.007l2.453 1.42c.547.32.885.9.885 1.54v2.83a1.79 1.79 0 0 1-.886 1.54l-2.453 1.41c-.274.16-.58.24-.886.24m-2.728-5.33v2.14c0 .101.052.19.137.24l1.841 1.059v-2.294zm3.478 1.143v2.294l1.839-1.056a.28.28 0 0 0 .136-.24v-2.143zm1.209-2.437L12.02 8.471a.26.26 0 0 0-.176-.03.3.3 0 0 0-.097.03L9.923 9.527l1.96 1.136z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.427 18.606a9.12 9.12 0 0 1-5.695 1.985c-5.064 0-9.168-4.11-9.168-9.17 0-5.07 4.105-9.17 9.168-9.17s9.167 4.1 9.167 9.17c0 2.37-.9 4.532-2.378 6.16l2.895 2.89a.749.749 0 1 1-1.06 1.06zm-.416-1.624a7.65 7.65 0 0 0 2.388-5.561c0-4.24-3.433-7.67-7.667-7.67a7.666 7.666 0 0 0-7.668 7.67c0 4.23 3.434 7.67 7.668 7.67a7.64 7.64 0 0 0 5.162-2 .7.7 0 0 1 .117-.11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchBoxOutline;
