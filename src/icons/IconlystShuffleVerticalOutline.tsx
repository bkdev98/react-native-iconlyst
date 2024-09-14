import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleVerticalOutline = ({
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
      d="M8.547 14.255a.75.75 0 0 1 .006 1.06c-1.253 1.268-1.28 2.69-1.28 4.654a.75.75 0 0 1-1.5 0v-.086c0-1.873 0-3.888 1.714-5.622a.75.75 0 0 1 1.06-.006M17.48 3.28a.75.75 0 0 1 .75.75v.078c.001 1.936.002 4.382-1.779 6.419a.75.75 0 0 1-1.129-.987c1.384-1.584 1.409-3.491 1.409-5.51a.75.75 0 0 1 .75-.75M6.52 3.281a.75.75 0 0 1 .75.75c0 1.52.01 2.973.616 4.295.584 1.273 1.774 2.524 4.369 3.469 2.822 1.026 4.386 2.234 5.195 3.705.779 1.415.778 2.954.778 4.388v.083a.75.75 0 0 1-1.5 0c0-1.532-.016-2.7-.592-3.748-.561-1.02-1.737-2.053-4.394-3.019-2.884-1.05-4.433-2.538-5.22-4.253C5.77 7.308 5.77 5.55 5.77 4.092v-.06a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M3.47 7.08a.75.75 0 0 1 0-1.06L5.991 3.5a.75.75 0 0 1 1.062 0l2.52 2.521a.75.75 0 0 1 0 1.06.75.75 0 0 1-1.061 0l-1.99-1.99-1.99 1.99a.75.75 0 0 1-1.061 0M20.529 7.08a.75.75 0 0 0 0-1.06L18.008 3.5a.75.75 0 0 0-1.061 0l-2.52 2.521a.75.75 0 0 0 0 1.06.75.75 0 0 0 1.06 0l1.99-1.99 1.99 1.99a.75.75 0 0 0 1.062 0"
    />
  </Svg>
);
export default IconlystShuffleVerticalOutline;
