import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbBold = ({
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
      d="M12.003 12.369c-.957 0-1.736.775-1.736 1.729 0 1.127.836 2.112 1.736 3.056.9-.944 1.736-1.93 1.736-3.056 0-.954-.78-1.73-1.736-1.73m0-7.86c-.806 0-1.541.455-1.918 1.187-.048.093-4.744 9.185-5.158 10.01-.844 1.689-.752 3.012.257 3.966 1.846 1.754 3.756.219 3.775.204a1 1 0 0 1 .132-.092c.458-.267 1.013-.73 1.512-1.2-1.106-1.156-2.336-2.581-2.336-4.486a3.737 3.737 0 0 1 7.472 0c0 1.905-1.231 3.33-2.336 4.486.499.47 1.054.933 1.512 1.2q.069.04.132.092c.019.016 1.933 1.548 3.773-.202 1.01-.956 1.103-2.28.277-3.932-.432-.861-5.128-9.953-5.176-10.045a2.16 2.16 0 0 0-1.918-1.188M7.125 22.508c-1.081 0-2.251-.371-3.317-1.385-.97-.916-2.35-2.952-.688-6.275.438-.875 4.994-9.694 5.187-10.07a4.15 4.15 0 0 1 3.696-2.27c1.559 0 2.975.87 3.696 2.272.193.374 4.749 9.193 5.168 10.03 1.68 3.36.3 5.397-.671 6.315-2.268 2.157-5.012 1.403-6.354.348-.65-.39-1.321-.97-1.84-1.46-.517.49-1.188 1.07-1.838 1.46a5.05 5.05 0 0 1-3.04 1.035"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirbnbBold;
