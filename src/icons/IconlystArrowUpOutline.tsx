import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M11.726 20a.75.75 0 0 1-.743-.648l-.007-.102V6.066l-4.743 4.763a.75.75 0 0 1-1.136-.974l.073-.084 6.024-6.05a.75.75 0 0 1 .503-.22l.029-.001h.029l.044.003-.073-.003a.75.75 0 0 1 .447.148l.008.006q.04.03.075.066l6.026 6.05a.75.75 0 0 1-.98 1.132l-.083-.073-4.743-4.761V19.25a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystArrowUpOutline;
