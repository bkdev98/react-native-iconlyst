import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchScan2Outline = ({
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
      d="M7.143 3.75A3.14 3.14 0 0 0 4 6.892v1.577a.75.75 0 1 1-1.5 0V6.892A4.64 4.64 0 0 1 7.143 2.25h1.29a.75.75 0 0 1 0 1.5zM15.35 3a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 6.892v1.577a.75.75 0 0 1-1.5 0V6.892a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75m-3.42 5.867a2.725 2.725 0 1 0 1.826 4.749l.008-.008.05-.046a2.725 2.725 0 0 0-1.884-4.695m3.396 5.24a4.225 4.225 0 1 0-1.093 1.028l1.281 1.28a.75.75 0 0 0 1.06-1.062zm-12.076.674a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.143-3.142v-1.577a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchScan2Outline;
