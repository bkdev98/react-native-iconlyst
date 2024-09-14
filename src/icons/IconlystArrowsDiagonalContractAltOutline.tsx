import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalContractAltOutline = ({
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
      d="M13.34 13.336a.75.75 0 0 1 .532-.22l5.63.013a.75.75 0 0 1-.002 1.5l-3.815-.008 4.845 4.845a.75.75 0 0 1-1.06 1.06l-4.846-4.845.007 3.815a.75.75 0 1 1-1.5.003l-.01-5.63c0-.2.078-.392.22-.533M3.47 3.474a.75.75 0 0 1 1.06 0L9.377 8.32 9.37 4.504a.75.75 0 1 1 1.5-.002l.01 5.63a.75.75 0 0 1-.751.751l-5.63-.011a.75.75 0 1 1 .002-1.5l3.815.008L3.47 4.535a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalContractAltOutline;
