import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeboLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.095 13.803a3.6 3.6 0 0 1-3.598 3.599c-.105 0-1.203-.014-1.307-.023a3.6 3.6 0 0 1-3.285-3.585V4.8a1.8 1.8 0 0 0-3.598 0v8.995a7.197 7.197 0 0 0 6.883 7.19c.104.005 1.202.016 1.307.016a7.196 7.196 0 0 0 7.196-7.197c0-3.802-2.25-6.28-5.936-6.954a1.787 1.787 0 0 0-2.232 1.728 1.785 1.785 0 0 0 1.481 1.76c1.898.38 3.09 1.577 3.09 3.466"
    />
  </Svg>
);
export default IconlystBeboLight;
