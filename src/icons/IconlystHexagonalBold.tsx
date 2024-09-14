import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalBold = ({
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
      d="m21.107 11.401-3.281-5.679a2.94 2.94 0 0 0-2.544-1.471H8.718A2.93 2.93 0 0 0 6.176 5.72l-3.284 5.683a2.93 2.93 0 0 0 .001 2.937l3.282 5.678a2.94 2.94 0 0 0 2.543 1.473h6.564a2.94 2.94 0 0 0 2.543-1.471l3.283-5.681a2.93 2.93 0 0 0-.001-2.938"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalBold;
