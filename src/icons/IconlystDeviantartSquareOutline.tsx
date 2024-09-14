import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviantartSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.033 6.688a.76.76 0 0 1 .623-.329h1.497c.546 0 .989.443.989.99v1.883c0 .246-.074.486-.212.69l-1.221 1.797h.444c.546 0 .989.443.989.99v1.767a.99.99 0 0 1-.99.989h-2.91l-1.276 1.845a.76.76 0 0 1-.623.328H8.846a.99.99 0 0 1-.989-.99v-1.883c0-.246.074-.486.213-.69l1.22-1.797h-.443a.99.99 0 0 1-.99-.99V9.522c0-.546.443-.989.99-.989h2.91zm1.014 1.171-1.208 1.747a.99.99 0 0 1-.813.426H9.357v.746h1.17c.678 0 1.08.76.699 1.32l-1.869 2.75v1.29h.596l1.207-1.747a.99.99 0 0 1 .814-.426h2.668v-.746h-1.17a.846.846 0 0 1-.698-1.32l1.868-2.75v-1.29z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeviantartSquareOutline;
