import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCloseBold = ({
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
      d="M14.287 8.017a.744.744 0 0 1-.982.398c-1.759-.74-3.87.004-4.804 1.642a.75.75 0 0 1-1.024.279.75.75 0 0 1-.279-1.023 5.35 5.35 0 0 1 4.635-2.698c.705 0 1.397.141 2.056.42.381.161.56.6.398.982m.059 8.368a.75.75 0 0 1-1.5 0v-4.27c0-.584-.473-1.06-1.054-1.06-.58 0-1.052.476-1.052 1.06v.48a.75.75 0 0 1-1.5 0v-.48a2.56 2.56 0 0 1 2.552-2.56 2.56 2.56 0 0 1 2.554 2.56zm-3.606 0a.75.75 0 0 1-1.5 0v-1.62a.75.75 0 0 1 1.5 0zm-2.736-1.04a.75.75 0 0 1-1.5 0v-2.84a.75.75 0 0 1 1.5 0zm9.157-1.462c0 .217.222.362.425.29a6.6 6.6 0 0 1 2.23-.385q.588.002 1.146.104c.19.034.37-.109.37-.302V7.906c0-3.308-2.123-5.531-5.283-5.531H7.614c-3.159 0-5.282 2.223-5.282 5.531v7.939c0 3.308 2.123 5.53 5.282 5.53h5.264a.31.31 0 0 0 .304-.343 6 6 0 0 1-.03-.58c0-2.056.933-3.892 2.397-5.114a.3.3 0 0 0 .112-.235v-3.158a3.8 3.8 0 0 0-.699-2.209.751.751 0 0 1 1.228-.862c.635.906.971 1.967.971 3.071z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.166 19.057 1.282-1.281a.746.746 0 0 0 0-1.061.75.75 0 0 0-1.06 0l-1.282 1.28-1.285-1.281a.749.749 0 1 0-1.058 1.063l1.283 1.28-1.285 1.289a.75.75 0 0 0 1.062 1.059l1.283-1.287 1.281 1.287a.75.75 0 1 0 1.062-1.059z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareTouchIdCloseBold;
