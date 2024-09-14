import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorAddOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.111 9.8c-.707-.448-1.603.182-1.42.999l.004.016 1.855 9.208c.187.81 1.258.995 1.706.294l1.662-2.597.001-.002a1.14 1.14 0 0 1 .715-.501l3.451-.773c.813-.182 1.003-1.255.305-1.706L7.129 9.811zm.794-1.272c-1.832-1.152-4.146.477-3.679 2.59l1.855 9.21.003.016c.475 2.115 3.267 2.608 4.436.781l1.585-2.476 3.308-.742c2.12-.475 2.607-3.277.773-4.44l-.018-.011zM17.134 2.75a.75.75 0 0 1 .75.75v2.068h2.069a.75.75 0 0 1 0 1.5h-2.07v2.07a.75.75 0 0 1-1.5 0v-2.07h-2.068a.75.75 0 1 1 0-1.5h2.069V3.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseCursorAddOutline;
