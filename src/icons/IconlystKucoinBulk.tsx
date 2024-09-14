import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKucoinBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.445 12.753a.75.75 0 0 0 0-1.5h-.01a.746.746 0 0 0-.745.75c0 .414.34.75.755.75"
    />
    <Path
      fill={props.color}
      d="m14.063 16.293 2.385-2.39a.75.75 0 1 0-1.062-1.06l-1.854 1.858-2.697-2.698 2.696-2.699 1.724 1.728a.749.749 0 1 0 1.062-1.058l-2.254-2.26A.746.746 0 0 0 13 7.711l-3.167 3.17v-1.94a.75.75 0 0 0-1.5 0v6.13a.75.75 0 0 0 1.5 0v-1.948l3.168 3.17a.747.747 0 0 0 1.06 0"
    />
  </Svg>
);
export default IconlystKucoinBulk;
