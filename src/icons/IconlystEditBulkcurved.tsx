import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditBulkcurved = ({
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
      d="M9.617 8.343a.3.3 0 0 1 .42-.06l5.18 3.88a.3.3 0 0 1 .06.421l-4.82 6.42c-1.16 1.55-2.91 1.86-4.12 1.86-.75 0-1.29-.12-1.35-.13a.51.51 0 0 1-.32-.24c-.07-.13-1.79-3.19.13-5.74z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.207 10.014-.67.89a.3.3 0 0 1-.42.06l-5.18-3.88a.3.3 0 0 1-.062-.42l.672-.9c.69-.93 1.76-1.42 2.84-1.42.74 0 1.48.23 2.12.71.75.57 1.24 1.4 1.38 2.33.13.94-.11 1.87-.68 2.63M19.858 19.352h-6.377a.75.75 0 0 0 0 1.5h6.377a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEditBulkcurved;
