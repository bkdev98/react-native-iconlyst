import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTopSideOutline = ({
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
      d="M4.148 3.737c1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.129 1.49C21.409 4.725 22 6.127 22 7.782v8.435c0 1.66-.59 3.062-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.276c-1.627 0-3.078-.509-4.128-1.487C3.09 19.278 2.5 17.876 2.5 16.216V7.782c0-1.66.59-3.062 1.648-4.045M5.17 4.835C4.45 5.505 4 6.493 4 7.782v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.409 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V7.782c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.276c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 12.094a.75.75 0 0 1 .55.24l2.603 2.803a.75.75 0 1 1-1.099 1.021l-2.054-2.212-2.054 2.212a.75.75 0 0 1-1.1-1.02l2.605-2.805a.75.75 0 0 1 .55-.24M2.5 8.543a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTopSideOutline;
