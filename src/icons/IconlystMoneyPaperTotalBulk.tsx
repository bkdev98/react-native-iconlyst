import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperTotalBulk = ({
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
      d="M17.812 8.264H6.188C3.982 8.264 2.5 9.81 2.5 12.113v5.56c0 2.304 1.482 3.85 3.688 3.85h11.623c2.207 0 3.689-1.546 3.689-3.85v-5.56c0-2.302-1.482-3.85-3.688-3.85"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.754 6.762h10.493a.75.75 0 0 0 0-1.5H6.754a.75.75 0 0 0 0 1.5M8.691 4.102h6.618a.75.75 0 0 0 0-1.5H8.691a.75.75 0 0 0 0 1.5M12 17.922a3.037 3.037 0 0 1-3.039-3.03A3.04 3.04 0 0 1 12 11.852a3.04 3.04 0 0 1 3.038 3.04A3.037 3.037 0 0 1 12 17.922m-1.539-3.03c0-.85.69-1.54 1.538-1.54s1.538.69 1.538 1.54c0 .844-.69 1.53-1.538 1.53a1.536 1.536 0 0 1-1.538-1.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.358 18.522H5.955a.75.75 0 0 1 0-1.5h1.403a.75.75 0 1 1 0 1.5M18.044 12.752h-1.403a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperTotalBulk;
