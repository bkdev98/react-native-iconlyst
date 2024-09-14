import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbBulk = ({
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
      d="M12.003 11.86c-.957 0-1.736.775-1.736 1.729 0 1.127.835 2.112 1.736 3.056.9-.944 1.736-1.929 1.736-3.056 0-.954-.78-1.729-1.737-1.729m0-7.86c-.806 0-1.542.455-1.918 1.187-.049.093-4.744 9.185-5.158 10.011-.844 1.688-.752 3.011.257 3.965 1.846 1.754 3.756.219 3.775.204a1 1 0 0 1 .132-.092c.458-.267 1.013-.729 1.511-1.2-1.105-1.156-2.335-2.581-2.335-4.486a3.737 3.737 0 0 1 7.472 0c0 1.905-1.232 3.33-2.337 4.486.5.471 1.055.933 1.513 1.2q.069.04.132.092c.018.016 1.933 1.548 3.773-.202 1.01-.956 1.102-2.279.276-3.932-.431-.861-5.127-9.953-5.175-10.045A2.16 2.16 0 0 0 12.003 4M7.124 21.999c-1.081 0-2.251-.371-3.317-1.385-.97-.916-2.35-2.952-.688-6.275.438-.875 4.994-9.694 5.187-10.069A4.15 4.15 0 0 1 12.002 2c1.56 0 2.975.87 3.696 2.271.194.374 4.75 9.193 5.168 10.03 1.68 3.361.3 5.397-.67 6.315-2.269 2.157-5.013 1.403-6.355.348-.65-.39-1.32-.969-1.838-1.46-.518.491-1.19 1.07-1.84 1.46a5.05 5.05 0 0 1-3.038 1.035"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirbnbBulk;
