import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorBucketOutline = ({
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
      d="M9.482 20.265c-.498-.001-.99-.109-1.442-.315a10.87 10.87 0 0 1-5.164-5.162 3.41 3.41 0 0 1 .376-3.485L9.828 2.69a.75.75 0 1 1 1.192.91l-6.575 8.61a1.91 1.91 0 0 0-.205 1.953 9.37 9.37 0 0 0 4.424 4.42 1.89 1.89 0 0 0 1.945-.2l8.62-6.572a.75.75 0 0 1 .91 1.194l-8.617 6.568a3.32 3.32 0 0 1-2.04.69M19.465 21.637a2.54 2.54 0 0 1-2.243-1.326 2.7 2.7 0 0 1 .014-2.7 7.4 7.4 0 0 1 1.813-1.8.75.75 0 0 1 .832 0 7.4 7.4 0 0 1 1.8 1.78 2.71 2.71 0 0 1 .029 2.721 2.54 2.54 0 0 1-2.245 1.325m0-4.259a5.4 5.4 0 0 0-.97 1.05 1.2 1.2 0 0 0 .038 1.153 1.06 1.06 0 0 0 1.864 0 1.2 1.2 0 0 0 .023-1.177 5.2 5.2 0 0 0-.955-1.026"
    />
    <Path
      fill={props.color}
      d="M19.045 13.377a4.64 4.64 0 0 1-2.089-.637 18.9 18.9 0 0 1-6.863-6.864c-.982-1.875-.65-2.806-.2-3.257.45-.45 1.381-.785 3.257.2a18.9 18.9 0 0 1 6.864 6.863c.981 1.874.65 2.806.2 3.257a1.58 1.58 0 0 1-1.169.438m-7.962-9.709a.35.35 0 0 0-.146.025c-.14.327.55 2.353 3.2 5 2.6 2.6 4.6 3.314 5.012 3.176.137-.414-.576-2.41-3.176-5.012-2.4-2.397-4.288-3.189-4.89-3.189"
    />
  </Svg>
);
export default IconlystColorBucketOutline;
