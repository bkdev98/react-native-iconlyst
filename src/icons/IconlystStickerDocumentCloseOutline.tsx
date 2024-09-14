import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerDocumentCloseOutline = ({
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
      d="M9.789 3.582a.75.75 0 0 1 .75-.75h6.147c1.592 0 2.94.567 3.886 1.583C21.512 5.425 22 6.82 22 8.38v5.623c0 .79-.305 1.549-.852 2.118l-4.27 4.448c-.576.6-1.373.94-2.206.94H8.637c-1.587 0-2.935-.567-3.881-1.582-.942-1.01-1.432-2.403-1.432-3.964V10.28a.75.75 0 0 1 1.5 0v5.682c0 1.25.39 2.255 1.029 2.941.634.68 1.568 1.106 2.784 1.106h6.035c.424 0 .83-.174 1.123-.48l4.27-4.447c.279-.29.435-.678.435-1.08V8.378c0-1.25-.388-2.256-1.026-2.942-.632-.679-1.567-1.105-2.788-1.105h-6.147a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.09 13.797h3.086a.75.75 0 0 1 0 1.5h-3.084a2.13 2.13 0 0 0-2.127 2.133v3.258a.75.75 0 1 1-1.5 0v-3.257a3.63 3.63 0 0 1 3.625-3.634M8.021 9.477a.75.75 0 0 1 .75-.75h6.138a.75.75 0 0 1 0 1.5H8.771a.75.75 0 0 1-.75-.75M8.02 14.03a.75.75 0 0 1 .75-.75h3.815a.75.75 0 0 1 0 1.5H8.77a.75.75 0 0 1-.75-.75M2.72 2.712a.75.75 0 0 1 1.06 0l1.082 1.081 1.081-1.081a.75.75 0 1 1 1.06 1.06l-1.08 1.082 1.081 1.081a.75.75 0 0 1-1.06 1.061L4.862 5.914 3.78 6.996a.75.75 0 0 1-1.06-1.06L3.8 4.853l-1.08-1.081a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerDocumentCloseOutline;
