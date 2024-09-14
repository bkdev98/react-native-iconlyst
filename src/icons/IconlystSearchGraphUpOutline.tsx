import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphUpOutline = ({
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
      d="M12.132 3.87a7.668 7.668 0 1 0 0 15.335 7.668 7.668 0 0 0 0-15.336m-9.168 7.667a9.168 9.168 0 1 1 9.168 9.168 9.167 9.167 0 0 1-9.168-9.168"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.646 8.364a.75.75 0 0 1 .35.454l.587 2.177a.75.75 0 1 1-1.448.39l-.392-1.452-1.452.392a.75.75 0 0 1-.39-1.449l2.176-.586a.75.75 0 0 1 .57.074"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.646 8.364a.75.75 0 0 1 .276 1.024l-2.517 4.375a.75.75 0 0 1-1.024.277l-1.653-.95-1.078 1.872a.75.75 0 0 1-1.3-.748l1.452-2.523a.75.75 0 0 1 1.024-.276l1.652.95 2.144-3.725a.75.75 0 0 1 1.024-.276M17.33 17.172a.75.75 0 0 1 1.061-.002l3.425 3.416a.75.75 0 0 1-1.06 1.062l-3.424-3.416a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphUpOutline;
