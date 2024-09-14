import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalMaximizeAltOutline = ({
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
      d="M3.47 20.527a.75.75 0 0 1-.22-.532l.01-5.63a.75.75 0 1 1 1.5.002l-.006 3.815 4.845-4.845a.75.75 0 1 1 1.06 1.06l-4.844 4.845 3.814-.008a.75.75 0 1 1 .003 1.5l-5.63.012a.75.75 0 0 1-.532-.22M13.339 10.664a.75.75 0 0 1 0-1.06l4.846-4.846-3.814.008a.75.75 0 1 1-.003-1.5l5.63-.012a.75.75 0 0 1 .752.752l-.01 5.63a.75.75 0 1 1-1.5-.003l.007-3.815-4.847 4.846a.75.75 0 0 1-1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalMaximizeAltOutline;
