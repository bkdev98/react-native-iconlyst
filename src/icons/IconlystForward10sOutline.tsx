import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward10sOutline = ({
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
      d="M2.334 12a9 9 0 0 1 17.998-.204.75.75 0 0 1-1.5.034 7.5 7.5 0 1 0-1.323 4.427.75.75 0 0 1 1.234.853A9 9 0 0 1 2.333 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.01 8.637a.75.75 0 0 1 .75.75v5.225a.75.75 0 0 1-1.5 0V9.387a.75.75 0 0 1 .75-.75M12.27 10.04a.856.856 0 0 0-.856.855v2.213a.856.856 0 0 0 1.71 0v-2.213a.856.856 0 0 0-.854-.856m-2.356.855a2.356 2.356 0 1 1 4.71 0v2.213a2.356 2.356 0 0 1-4.71 0zM21.459 9.151a.75.75 0 0 1 .275 1.025l-1.28 2.22a.75.75 0 0 1-1.025.275l-2.208-1.274a.75.75 0 0 1 .75-1.299l1.558.899.905-1.57a.75.75 0 0 1 1.025-.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward10sOutline;
