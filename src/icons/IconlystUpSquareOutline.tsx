import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpSquareOutline = ({
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
      d="M3.898 20.263c1.05.979 2.501 1.487 4.128 1.487h7.948c1.628 0 3.078-.511 4.129-1.49 1.056-.985 1.647-2.387 1.647-4.042V7.783c0-1.66-.59-3.062-1.648-4.046-1.05-.978-2.5-1.487-4.128-1.487H8.026c-1.627 0-3.078.509-4.128 1.487C2.84 4.721 2.25 6.124 2.25 7.784v8.434c0 1.66.59 3.062 1.648 4.045m1.022-1.098c-.72-.67-1.17-1.658-1.17-2.947V7.784c0-1.29.45-2.278 1.17-2.949.726-.676 1.789-1.085 3.106-1.085h7.948c1.317 0 2.38.409 3.106 1.085.72.67 1.17 1.66 1.17 2.948v8.435c0 1.284-.45 2.273-1.17 2.945-.727.677-1.79 1.087-3.106 1.087H8.026c-1.317 0-2.38-.409-3.106-1.084"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.094 13.934a.75.75 0 0 0 1.06-.002L12 11.073l2.846 2.858a.75.75 0 1 0 1.063-1.058l-3.377-3.392a.75.75 0 0 0-1.063 0l-3.377 3.392a.75.75 0 0 0 .002 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpSquareOutline;
