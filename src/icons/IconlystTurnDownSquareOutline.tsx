import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownSquareOutline = ({
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
      d="M3.897 20.26c-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046 1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.047v8.434c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.026c-1.628 0-3.078-.511-4.129-1.49m1.023-1.098c.727.678 1.79 1.088 3.106 1.088h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.784c0-1.29-.45-2.278-1.17-2.949-.726-.676-1.789-1.085-3.106-1.085H8.026c-1.317 0-2.38.409-3.106 1.085-.72.67-1.17 1.66-1.17 2.948v8.435c0 1.284.45 2.273 1.17 2.945"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.321 13.291a.75.75 0 0 1 1.06 0l1.415 1.414 1.413-1.414a.75.75 0 0 1 1.06 1.061l-1.943 1.944a.75.75 0 0 1-1.06 0L7.32 14.352a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.795 16.52a.75.75 0 0 1-.75-.75v-4.616a3.67 3.67 0 1 1 7.34 0v4.283a.75.75 0 0 1-1.5 0v-4.283a2.17 2.17 0 1 0-4.34 0v4.616a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownSquareOutline;
