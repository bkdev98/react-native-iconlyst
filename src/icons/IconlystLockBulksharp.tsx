import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path fill={props.color} d="M4.14 9.567h16.22V22.48H4.14z" opacity={0.4} />
    <Path
      fill={props.color}
      d="M8.44 8.014v1.553h-1.5V8.03a5.28 5.28 0 0 1 1.57-3.765C9.515 3.27 10.86 2.7 12.263 2.73a5.306 5.306 0 0 1 5.297 5.3v1.537h-1.5V8.03a3.804 3.804 0 0 0-3.8-3.801h-.016a3.78 3.78 0 0 0-2.68 1.102A3.77 3.77 0 0 0 8.44 8.014M11.36 17.904h1.5v-3.721h-1.5z"
    />
  </Svg>
);
export default IconlystLockBulksharp;
