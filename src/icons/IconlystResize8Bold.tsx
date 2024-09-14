import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize8Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9 21.21H9A1 1 0 0 1 8 20.206L8.01 16.2l-4.008.01H4a1 1 0 0 1-.002-2l5.012-.012h.002a1 1 0 0 1 1 1.002L10 20.211a1 1 0 0 1-1 .998M14.988 10.303a1 1 0 0 1-.707-.293 1 1 0 0 1-.293-.709L14 4.289a1 1 0 0 1 1-.998h.002A1 1 0 0 1 16 4.293l-.009 4.008 4.008-.009H20a1 1 0 0 1 .002 2l-5.012.011z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize8Bold;
