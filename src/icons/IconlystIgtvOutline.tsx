import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIgtvOutline = ({
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
      d="M4.654 6.379c.886-.95 2.147-1.48 3.628-1.48h7.435c1.485 0 2.746.529 3.632 1.48.88.946 1.335 2.247 1.335 3.7v6.49c0 1.453-.454 2.754-1.335 3.7-.886.951-2.148 1.48-3.633 1.48H8.282c-1.485 0-2.745-.529-3.631-1.48-.88-.946-1.335-2.248-1.335-3.7v-6.49c0-1.453.457-2.755 1.338-3.7m1.097 1.023c-.579.621-.935 1.535-.935 2.677v6.49c0 1.143.355 2.057.933 2.678.572.614 1.42 1.003 2.533 1.003h7.434c1.115 0 1.963-.389 2.535-1.004.579-.62.933-1.534.933-2.677v-6.49c0-1.143-.354-2.057-.933-2.677-.572-.615-1.42-1.004-2.534-1.004H8.282c-1.11 0-1.957.388-2.53 1.004"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.503 11.424a.75.75 0 0 1 .29.592v1.62l2.99-.848a.75.75 0 0 1 .408 1.444l-3.944 1.117a.75.75 0 0 1-.954-.722V12.98l-3.095.785a.75.75 0 1 1-.369-1.454l4.03-1.022a.75.75 0 0 1 .644.135M14.935 2.447a.75.75 0 0 1 .046 1.06l-2.428 2.648a.75.75 0 0 1-1.106 0l-2.43-2.648a.75.75 0 1 1 1.106-1.014L12 4.539l1.875-2.046a.75.75 0 0 1 1.06-.046"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIgtvOutline;
