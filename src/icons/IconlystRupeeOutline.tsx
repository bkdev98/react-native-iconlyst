import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeOutline = ({
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
      d="M12.498 9.56A2.747 2.747 0 0 0 9.75 6.811H8.248a.75.75 0 1 1 0-1.5h1.5c2.347 0 4.25 1.9 4.25 4.247v.003A4.25 4.25 0 0 1 10.05 13.8l3.732 3.732a.75.75 0 1 1-1.06 1.06l-5.002-5.001a.75.75 0 0 1 .53-1.28H9.75a2.75 2.75 0 0 0 2.748-2.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.498 6.066a.75.75 0 0 1 .75-.75h8.003a.75.75 0 0 1 0 1.5H8.248a.75.75 0 0 1-.75-.75M7.498 9.426a.75.75 0 0 1 .75-.75h8.003a.75.75 0 0 1 0 1.5H8.248a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRupeeOutline;
