import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStraightenBold = ({
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
      d="M3.21 9.657h15.673a.498.498 0 0 0 .483-.629l-1.05-3.92a3.84 3.84 0 0 0-1.798-2.343 3.83 3.83 0 0 0-2.93-.385L5.457 4.558a3.867 3.867 0 0 0-2.73 4.728.5.5 0 0 0 .483.37M20.568 14.946H4.895a.498.498 0 0 0-.483.629l1.049 3.918a3.867 3.867 0 0 0 4.729 2.73l8.13-2.179a3.83 3.83 0 0 0 2.345-1.798 3.83 3.83 0 0 0 .386-2.929.5.5 0 0 0-.483-.37M13.603 11.553a.75.75 0 0 0 0 1.5H15.7a.75.75 0 0 0 0-1.5zM21 11.553h-2.097a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 0-1.5M8.3 11.553a.75.75 0 0 0 0 1.5h2.097a.75.75 0 0 0 0-1.5zM5.847 12.303a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h2.097a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStraightenBold;
