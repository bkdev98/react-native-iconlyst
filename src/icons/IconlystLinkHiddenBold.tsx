import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkHiddenBold = ({
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
      d="M9.265 21.003a6.25 6.25 0 0 1-4.429-1.835A6.25 6.25 0 0 1 3 14.716a6.24 6.24 0 0 1 1.835-4.443L5.864 9.25a1 1 0 0 1 1.41 1.418l-1.027 1.02A4.25 4.25 0 0 0 5 14.718c0 1.15.444 2.229 1.249 3.036 1.139 1.136 2.871 1.536 4.42 1.019a1 1 0 1 1 .635 1.896 6.4 6.4 0 0 1-2.039.335M17.432 15.05a.999.999 0 0 1-.708-1.706l1.026-1.03A4.26 4.26 0 0 0 19 9.283a4.26 4.26 0 0 0-1.249-3.036c-1.139-1.136-2.873-1.537-4.42-1.018a1 1 0 0 1-.634-1.897c2.291-.765 4.77-.194 6.467 1.5A6.25 6.25 0 0 1 21 9.284a6.24 6.24 0 0 1-1.835 4.444l-1.025 1.028a1 1 0 0 1-.708.294M14.983 20.37a1 1 0 0 1-.918-.604L7.87 5.407a1 1 0 0 1 .52-1.313 1 1 0 0 1 1.316.52L15.9 18.976a1 1 0 0 1-.918 1.395"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkHiddenBold;
