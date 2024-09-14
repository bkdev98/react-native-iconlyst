import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBulksharp = ({
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
      d="M12.25 2.006 1.126 11.538l.977 1.139 1.74-1.491v10.808H20.66V11.188l1.737 1.489.977-1.139z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path fill={props.color} d="M13 17.107h-1.5v-4.91H13z" />
  </Svg>
);
export default IconlystHomeBulksharp;
