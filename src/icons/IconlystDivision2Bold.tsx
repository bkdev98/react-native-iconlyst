import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision2Bold = ({
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
      d="M2.5 12A9.5 9.5 0 0 1 12 2.5a9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1-19 0M11 8.614a1 1 0 0 1 1-1h.052a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0 6.771a1 1 0 0 1 1-1h.052a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1M7.864 12a.75.75 0 0 1 .75-.75h6.772a.75.75 0 0 1 0 1.5H8.614a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDivision2Bold;
