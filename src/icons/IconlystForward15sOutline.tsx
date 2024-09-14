import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward15sOutline = ({
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
      d="M21.459 9.151a.75.75 0 0 1 .275 1.025l-1.28 2.22a.75.75 0 0 1-1.025.275l-2.208-1.274a.75.75 0 0 1 .75-1.299l1.558.899.905-1.57a.75.75 0 0 1 1.025-.276M9.863 9.387a.75.75 0 0 1 .75-.75h2.942a.75.75 0 0 1 0 1.5h-2.192v1.04h1.104a2.092 2.092 0 1 1 0 4.185h-1.854a.75.75 0 0 1 0-1.5h1.854a.593.593 0 0 0 0-1.185h-1.854a.75.75 0 0 1-.75-.75zM7.951 8.637a.75.75 0 0 1 .75.75v5.225a.75.75 0 0 1-1.5 0V9.387a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward15sOutline;
