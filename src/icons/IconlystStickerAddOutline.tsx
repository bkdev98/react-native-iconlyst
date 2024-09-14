import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerAddOutline = ({
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
      fillRule="evenodd"
      d="M9.95 3.98a.75.75 0 0 1 .75-.75h6.054c1.571 0 2.902.56 3.836 1.563.93.998 1.41 2.372 1.41 3.911v5.54c0 .78-.303 1.53-.842 2.093l-4.206 4.381c-.57.594-1.358.93-2.182.93H8.827c-1.567 0-2.897-.56-3.832-1.562-.93-.997-1.413-2.372-1.413-3.912v-5.597a.75.75 0 0 1 1.5 0v5.597c0 1.229.383 2.216 1.01 2.89.622.667 1.54 1.085 2.735 1.085h5.943c.414 0 .812-.17 1.1-.47l4.205-4.38c.273-.285.425-.663.425-1.056V8.705c0-1.229-.38-2.216-1.007-2.889-.62-.666-1.538-1.085-2.739-1.085H10.7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.135 14.031h3.042a.75.75 0 1 1 0 1.5h-3.039a2.09 2.09 0 0 0-2.083 2.09v3.21a.75.75 0 0 1-1.5 0v-3.209a3.59 3.59 0 0 1 3.58-3.59M8.208 9.785a.75.75 0 0 1 .75-.75h6.047a.75.75 0 0 1 0 1.5H8.958a.75.75 0 0 1-.75-.75m-.001 4.486a.75.75 0 0 1 .75-.75h3.758a.75.75 0 0 1 0 1.5H8.957a.75.75 0 0 1-.75-.75M5.494 2.352a.75.75 0 0 1 .75.75v1.495H7.74a.75.75 0 0 1 0 1.5H6.244V7.59a.75.75 0 1 1-1.5 0V6.097H3.25a.75.75 0 1 1 0-1.5h1.494V3.102a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerAddOutline;
