import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrimBold = ({
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
      d="M2.502 15.47a.3.3 0 0 0 .3.3h2.48a.3.3 0 0 0 .301-.3v-2.436a.3.3 0 0 0-.3-.3H2.802a.3.3 0 0 0-.3.3zM18.418 6.4a.3.3 0 0 0 .3.3h2.337a.285.285 0 0 0 .284-.35c-.34-1.4-1.24-2.466-2.53-3.038-.188-.084-.392.06-.392.267zM2.502 10.935a.3.3 0 0 0 .3.3h2.48a.3.3 0 0 0 .301-.3V8.488a.3.3 0 0 0-.3-.3H2.802a.3.3 0 0 0-.3.3zM18.418 10.934a.3.3 0 0 0 .3.3h2.479a.3.3 0 0 0 .3-.3V8.5a.3.3 0 0 0-.3-.3h-2.479a.3.3 0 0 0-.3.3zM18.418 15.48a.3.3 0 0 0 .3.3h2.479a.3.3 0 0 0 .3-.3v-2.447a.3.3 0 0 0-.3-.3h-2.479a.3.3 0 0 0-.3.3zM5.583 17.57a.3.3 0 0 0-.3-.3H2.936a.285.285 0 0 0-.285.346c.334 1.419 1.237 2.5 2.538 3.075.189.084.392-.06.392-.267zM5.283 6.688a.3.3 0 0 0 .3-.3v-2.81c0-.207-.204-.35-.393-.267-1.286.57-2.186 1.632-2.529 3.028a.285.285 0 0 0 .284.35zM12.751 10.333a.75.75 0 0 1-1.5 0V8.279a.75.75 0 0 1 1.5 0zm0 5.796a.75.75 0 0 1-1.5 0v-2.054a.75.75 0 0 1 1.5 0zm3.879 5.036a.3.3 0 0 0 .3-.3l-.013-8.871-.002-.01.002-.01V3.137a.3.3 0 0 0-.3-.3H13.05a.3.3 0 0 0-.299.3v1.68a.75.75 0 0 1-1.5 0v-1.68a.3.3 0 0 0-.3-.3h-3.57a.3.3 0 0 0-.299.3L7.07 20.865a.3.3 0 0 0 .3.3h3.581a.3.3 0 0 0 .3-.3v-1.65a.75.75 0 0 1 1.5 0v1.65a.3.3 0 0 0 .3.3zM18.718 17.28a.3.3 0 0 0-.3.3v2.843c0 .206.203.35.392.267 1.297-.575 2.198-1.65 2.534-3.063a.285.285 0 0 0-.285-.347z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCutTrimBold;
