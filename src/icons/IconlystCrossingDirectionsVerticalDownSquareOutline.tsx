import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsVerticalDownSquareOutline = ({
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
      d="M3.898 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.047v8.434c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.026c-1.628 0-3.078-.511-4.129-1.49-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046M4.92 4.835c-.72.67-1.17 1.66-1.17 2.948v8.435c0 1.284.45 2.273 1.17 2.945.727.677 1.79 1.087 3.106 1.087h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.784c0-1.29-.45-2.278-1.17-2.949-.726-.676-1.789-1.085-3.106-1.085H8.026c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.994 7.788a.75.75 0 0 1 0 1.06l-6.082 6.083h.355a.75.75 0 0 1 0 1.5H8.102a.75.75 0 0 1-.75-.75v-2.165a.75.75 0 0 1 1.5 0v.354l6.081-6.082a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.005 7.788a.75.75 0 0 1 1.06 0l6.082 6.082v-.354a.75.75 0 0 1 1.5 0v2.165a.75.75 0 0 1-.75.75h-2.166a.75.75 0 0 1 0-1.5h.356L8.005 8.849a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsVerticalDownSquareOutline;
