import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoltOutline = ({
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
      d="M11.903 2.39c1.239-.044 2.444.449 3.439 1.444L20.3 8.792c.998.998 1.491 2.203 1.447 3.441-.044 1.23-.614 2.412-1.59 3.387l-4.672 4.672c-.975.975-2.156 1.546-3.386 1.59-1.239.044-2.444-.45-3.441-1.448l-4.959-4.958c-.997-.998-1.49-2.202-1.446-3.44.044-1.23.615-2.411 1.59-3.387l4.671-4.672c.977-.975 2.16-1.544 3.39-1.588M9.575 5.037 4.904 9.71c-.757.757-1.124 1.592-1.152 2.38-.028.778.272 1.59 1.008 2.325l4.958 4.959c.736.736 1.549 1.036 2.328 1.009.787-.028 1.623-.395 2.378-1.151l4.673-4.673c.756-.756 1.123-1.592 1.151-2.38.028-.778-.273-1.59-1.008-2.326L14.28 4.895c-.732-.733-1.545-1.034-2.325-1.007-.788.028-1.625.395-2.381 1.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.383 8.007a.75.75 0 0 1 .223 1.037l-1.514 2.344h3.123a.75.75 0 0 1 .63 1.157l-2.264 3.5a.75.75 0 0 1-1.26-.816l1.515-2.341H9.715a.75.75 0 0 1-.63-1.157l2.261-3.501a.75.75 0 0 1 1.037-.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoltOutline;
