import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownOutline = ({
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
      d="M10.197 3.5a.627.627 0 0 0-.627.627v7.628a1.28 1.28 0 0 1-1.28 1.28H5.806c-.56 0-.848.686-.445 1.088 1.11 1.103 2.221 2.217 3.332 3.33.956.958 1.912 1.916 2.865 2.865a.623.623 0 0 0 .88 0l2.47-2.471q1.863-1.869 3.732-3.73a.634.634 0 0 0-.444-1.083h-2.49a1.28 1.28 0 0 1-1.28-1.28V4.128A.627.627 0 0 0 13.8 3.5zm-2.127.627C8.07 2.952 9.023 2 10.197 2H13.8c1.175 0 2.127.952 2.127 2.127v7.407h2.27c1.903 0 2.846 2.307 1.502 3.645q-1.866 1.86-3.726 3.725-1.235 1.238-2.473 2.474c-.828.828-2.17.83-3 .003a1457 1457 0 0 1-2.873-2.874 1273 1273 0 0 0-3.322-3.321c-1.346-1.338-.406-3.652 1.502-3.652H8.07z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownOutline;
