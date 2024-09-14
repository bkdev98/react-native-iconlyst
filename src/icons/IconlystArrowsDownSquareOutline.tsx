import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDownSquareOutline = ({
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
      d="M15.564 2.25a.75.75 0 0 1 .75.75v10.27l.86-.856a.75.75 0 1 1 1.058 1.062l-2.138 2.131a.75.75 0 0 1-1.06 0l-2.138-2.13a.75.75 0 1 1 1.06-1.063l.858.856V3a.75.75 0 0 1 .75-.75M8.436 2.25a.75.75 0 0 1 .75.75v10.27l.86-.856a.75.75 0 0 1 1.058 1.062l-2.138 2.131a.75.75 0 0 1-1.06 0l-2.138-2.13a.75.75 0 1 1 1.06-1.063l.858.856V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.835 4.92c-.676.726-1.085 1.789-1.085 3.107v7.947c0 1.317.41 2.38 1.087 3.106.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.788 1.085-3.106V8.027c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.95-1.17H7.783c-1.289 0-2.277.45-2.947 1.17M3.737 3.898C4.72 2.84 6.123 2.25 7.782 2.25h8.434c1.66 0 3.063.591 4.047 1.648.978 1.05 1.487 2.501 1.487 4.129v7.947c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.046 1.648H7.782c-1.655 0-3.057-.591-4.042-1.647-.979-1.05-1.49-2.5-1.49-4.13V8.028c0-1.628.508-3.078 1.487-4.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDownSquareOutline;
