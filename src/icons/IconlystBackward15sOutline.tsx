import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward15sOutline = ({
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
      d="M12.834 4.5a7.5 7.5 0 0 0-7.498 7.33.75.75 0 0 1-1.5-.034 9 9 0 1 1 1.588 5.314.75.75 0 1 1 1.235-.852A7.5 7.5 0 1 0 12.834 4.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.71 9.151a.75.75 0 0 1 1.024.275l.906 1.57 1.557-.898a.75.75 0 1 1 .75 1.3L4.739 12.67a.75.75 0 0 1-1.024-.275l-1.28-2.22a.75.75 0 0 1 .274-1.025M10.357 8.637a.75.75 0 0 1 .75.75v5.225a.75.75 0 0 1-1.5 0V9.387a.75.75 0 0 1 .75-.75M12.272 9.387a.75.75 0 0 1 .75-.75h2.94a.75.75 0 0 1 0 1.5h-2.19v1.04h1.103a2.092 2.092 0 1 1 0 4.185h-1.854a.75.75 0 0 1 0-1.5h1.854a.593.593 0 1 0 0-1.185h-1.854a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward15sOutline;
