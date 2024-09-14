import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalMaximizeOutline = ({
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
      d="M13.34 13.337a.75.75 0 0 1 1.06 0l4.846 4.845-.007-3.815a.75.75 0 0 1 1.5-.003l.01 5.63a.75.75 0 0 1-.75.752l-5.631-.012a.75.75 0 0 1 .003-1.5l3.814.008-4.845-4.845a.75.75 0 0 1 0-1.06M3.47 3.474a.75.75 0 0 1 .532-.22l5.63.012a.75.75 0 1 1-.003 1.5l-3.814-.008 4.846 4.845a.75.75 0 1 1-1.06 1.06L4.752 5.819l.008 3.815a.75.75 0 1 1-1.5.003l-.011-5.63c0-.2.079-.391.22-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalMaximizeOutline;
