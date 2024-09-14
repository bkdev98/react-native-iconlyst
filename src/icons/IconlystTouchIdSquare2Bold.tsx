import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquare2Bold = ({
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
      d="M17.329 15.47a.75.75 0 0 1-1.5 0v-3.4c0-.793-.242-1.557-.699-2.209a.751.751 0 0 1 1.228-.862c.635.907.971 1.968.971 3.071zm-2.873-7.328a.746.746 0 0 1-.983.398c-1.759-.74-3.869.003-4.804 1.642a.75.75 0 1 1-1.302-.744 5.35 5.35 0 0 1 4.634-2.698c.705 0 1.397.141 2.056.419.381.162.56.601.399.983m.058 8.368a.75.75 0 0 1-1.5 0v-4.27c0-.584-.473-1.06-1.054-1.06-.58 0-1.052.476-1.052 1.06v.48a.75.75 0 0 1-1.5 0v-.48a2.56 2.56 0 0 1 2.552-2.56 2.56 2.56 0 0 1 2.554 2.56zm-3.606 0a.75.75 0 0 1-1.5 0v-1.62a.75.75 0 0 1 1.5 0zm-2.736-1.04a.75.75 0 0 1-1.5 0v-2.84a.75.75 0 0 1 1.5 0zM16.217 2.5H7.782C4.622 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdSquare2Bold;
