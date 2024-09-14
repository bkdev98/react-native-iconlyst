import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBadgeOutline = ({
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
      d="M3.99 5.061c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.648C21.49 6.112 22 7.562 22 9.19v5.616c0 1.628-.509 3.078-1.487 4.13-.985 1.056-2.387 1.647-4.047 1.647H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V9.19c0-1.628.511-3.078 1.49-4.129m1.097 1.023C4.41 6.811 4 7.874 4 9.19v5.616c0 1.318.409 2.381 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V9.19c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.885 9.883a.75.75 0 0 1 .75-.75h3.337a.75.75 0 0 1 0 1.5H8.635a.75.75 0 0 1-.75-.75m0 4.236a.75.75 0 0 1 .75-.75h7.229a.75.75 0 0 1 0 1.5h-7.23a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentBadgeOutline;
