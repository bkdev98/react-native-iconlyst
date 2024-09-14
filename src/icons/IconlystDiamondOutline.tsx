import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondOutline = ({
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
      d="M12.153 2.254c1.239-.044 2.444.449 3.439 1.444l4.958 4.959c.998.997 1.491 2.202 1.447 3.44-.044 1.23-.614 2.412-1.59 3.387l-4.672 4.673c-.975.974-2.156 1.545-3.386 1.589-1.239.044-2.444-.45-3.441-1.447L3.949 15.34c-.997-.997-1.49-2.202-1.446-3.44.044-1.23.615-2.41 1.59-3.386l4.671-4.672c.977-.976 2.16-1.545 3.39-1.588M9.825 4.902 5.154 9.574c-.757.757-1.124 1.593-1.152 2.38-.028.778.272 1.59 1.008 2.326l4.958 4.958c.736.736 1.549 1.037 2.328 1.009.787-.028 1.623-.395 2.378-1.151l4.673-4.672c.756-.757 1.123-1.593 1.151-2.38.028-.779-.273-1.591-1.008-2.327L14.53 4.76c-.732-.733-1.545-1.034-2.325-1.006-.788.027-1.625.394-2.381 1.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondOutline;
