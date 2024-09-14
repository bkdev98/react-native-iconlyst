import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalSquareOutline = ({
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
      d="M4.835 4.92c-.676.726-1.085 1.789-1.085 3.106v7.948c0 1.317.41 2.38 1.087 3.106.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.95-1.17H7.783c-1.289 0-2.277.45-2.947 1.17M3.737 3.898C4.72 2.84 6.123 2.25 7.782 2.25h8.434c1.66 0 3.063.59 4.047 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.046 1.648H7.782c-1.655 0-3.057-.591-4.042-1.647-.979-1.05-1.49-2.501-1.49-4.13V8.027c0-1.627.508-3.077 1.487-4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.469 14.617a.75.75 0 0 1 1.06 0l2.146 2.145a.75.75 0 0 1-1.061 1.06l-1.615-1.614-1.615 1.615a.75.75 0 1 1-1.06-1.061zM9.323 6.18a.75.75 0 0 1 1.06 0L12 7.797l1.615-1.615a.75.75 0 0 1 1.06 1.06L12.53 9.387a.75.75 0 0 1-1.06 0L9.323 7.24a.75.75 0 0 1 0-1.06M6.488 12a.75.75 0 0 1 .75-.75h9.524a.75.75 0 1 1 0 1.5H7.238a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeVerticalSquareOutline;
