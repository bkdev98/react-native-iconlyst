import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelsiusBulk = ({
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
      d="M16.717 2.504H8.282C5.122 2.504 3 4.727 3 8.034v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.713 10.035a1.88 1.88 0 0 0 1.875 1.88 1.874 1.874 0 1 0-1.875-1.88"
    />
    <Path
      fill={props.color}
      d="M12.118 17.625c1.694 0 3.353-.842 4.439-2.252a.75.75 0 1 0-1.188-.916c-.793 1.029-2.038 1.668-3.251 1.668-2.287 0-4.08-1.788-4.08-4.07 0-2.3 1.83-4.17 4.08-4.17.493 0 1.006.092 1.483.265a.75.75 0 1 0 .511-1.41 5.9 5.9 0 0 0-1.994-.355c-3.076 0-5.58 2.544-5.58 5.67 0 3.07 2.504 5.57 5.58 5.57"
    />
  </Svg>
);
export default IconlystCelsiusBulk;
