import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextSearchOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.08 7.087v12.11a.75.75 0 0 0 1.5 0V7.088h5.7a.75.75 0 0 0 0-1.5H3.5a.75.75 0 1 0 0 1.5zM17.984 12.957a2.22 2.22 0 1 0 0 4.441 2.22 2.22 0 0 0 0-4.441m3.045 4.359a3.72 3.72 0 1 0-1.092 1.029l1.034 1.032a.75.75 0 1 0 1.06-1.062z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextSearchOutline;
