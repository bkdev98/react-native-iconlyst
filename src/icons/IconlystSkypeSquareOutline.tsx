import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeSquareOutline = ({
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
      d="M10.399 9.182a.98.98 0 0 0-.399.806c0 .563.368.964.763 1.037l2.742.499c1.179.213 1.972 1.285 1.994 2.46l.001.028v.052A2.48 2.48 0 0 1 14.523 16c-.628.49-1.495.737-2.524.737-1.498 0-2.982-.756-3.394-2.064a.75.75 0 1 1 1.431-.45c.143.452.841 1.014 1.963 1.014.804 0 1.312-.194 1.601-.42.27-.21.396-.48.399-.793-.005-.558-.371-.954-.762-1.024l-2.744-.5C9.3 12.283 8.5 11.184 8.5 9.988c0-.774.333-1.487.976-1.989.627-.49 1.495-.737 2.524-.737 1.499 0 2.981.757 3.393 2.063a.75.75 0 0 1-1.43.452C13.82 9.324 13.12 8.762 12 8.762c-.804 0-1.312.194-1.601.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSkypeSquareOutline;
