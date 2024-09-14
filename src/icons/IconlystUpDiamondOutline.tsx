import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpDiamondOutline = ({
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
      d="M11.903 2.253c1.239-.044 2.444.449 3.439 1.444L20.3 8.656c.998.998 1.491 2.203 1.447 3.441-.044 1.23-.614 2.411-1.59 3.386l-4.672 4.672c-.975.976-2.156 1.546-3.386 1.59-1.239.044-2.444-.45-3.441-1.447L3.699 15.34c-.997-.997-1.49-2.202-1.446-3.44.044-1.231.615-2.412 1.59-3.387L8.514 3.84c.977-.976 2.16-1.545 3.39-1.588M9.575 4.9 4.904 9.573c-.757.757-1.124 1.593-1.152 2.38-.028.779.272 1.591 1.008 2.327l4.958 4.957c.736.736 1.549 1.037 2.328 1.009.787-.028 1.623-.395 2.378-1.151l4.673-4.672c.756-.756 1.123-1.592 1.151-2.38.028-.778-.273-1.59-1.008-2.327L14.28 4.758c-.732-.733-1.545-1.034-2.325-1.006-.788.027-1.625.394-2.381 1.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.322 11.754a.75.75 0 0 0 .002-1.06L12.53 7.89a.75.75 0 0 0-1.063 0l-2.791 2.804a.75.75 0 1 0 1.063 1.058l2.26-2.27 2.263 2.27a.75.75 0 0 0 1.06.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 16.332a.75.75 0 0 0 .75-.75V8.421a.75.75 0 0 0-1.5 0v7.161c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpDiamondOutline;
