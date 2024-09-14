import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalContractOutline = ({
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
      d="M10.66 13.336a.75.75 0 0 1 .22.532l-.011 5.631a.75.75 0 0 1-1.5-.003l.007-3.815-4.846 4.845a.75.75 0 1 1-1.06-1.06l4.845-4.845-3.815.008a.75.75 0 0 1-.003-1.5l5.63-.012c.2 0 .391.078.532.22M20.53 3.474a.75.75 0 0 1 0 1.06L15.685 9.38l3.815-.008a.75.75 0 0 1 .003 1.5l-5.63.011a.75.75 0 0 1-.752-.751l.01-5.63a.75.75 0 1 1 1.5.002l-.007 3.816 4.847-4.846a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalContractOutline;
