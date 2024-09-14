import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision1Bulk = ({
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
      d="M3.924 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.93.567 3.862 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.931 1-2.265 1.568-3.863 1.568H7.783c-1.597 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.495-2.962 1.424-3.958"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11 8.615a1 1 0 0 1 1-1h.053a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1M11 15.386a1 1 0 0 1 1-1h.053a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1M7.865 12a.75.75 0 0 1 .75-.75h6.77a.75.75 0 0 1 0 1.5h-6.77a.75.75 0 0 1-.75-.75"
    />
  </Svg>
);
export default IconlystDivision1Bulk;