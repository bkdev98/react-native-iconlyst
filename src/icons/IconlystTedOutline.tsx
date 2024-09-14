import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTedOutline = ({
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
      d="M8.937 8.418a.75.75 0 0 1 .75-.75h3.82a.75.75 0 0 1 0 1.5h-3.07v6.141h3.07a.75.75 0 0 1 0 1.5h-3.82a.75.75 0 0 1-.75-.75zM15.622 8.418a.75.75 0 0 1 .75-.75h.807a4.57 4.57 0 0 1 0 9.141h-.807a.75.75 0 0 1-.75-.75zm1.5.75v6.141h.057a3.07 3.07 0 0 0 0-6.141z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.937 12.238a.75.75 0 0 1 .75-.75h3.343a.75.75 0 0 1 0 1.5H9.687a.75.75 0 0 1-.75-.75M2.25 8.418a.75.75 0 0 1 .75-.75h3.82a.75.75 0 0 1 0 1.5H5.66v6.891a.75.75 0 0 1-1.5 0V9.168H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTedOutline;
