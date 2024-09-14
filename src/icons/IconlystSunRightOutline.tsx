import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRightOutline = ({
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
      d="M12.255 8.414a3.585 3.585 0 1 0 0 7.17 3.585 3.585 0 0 0 0-7.17M7.17 12a5.085 5.085 0 1 1 10.17 0 5.085 5.085 0 0 1-10.17 0M19.36 4.893a.75.75 0 0 1 0 1.06L18.36 6.957a.75.75 0 0 1-1.061-1.06L18.3 4.892a.75.75 0 0 1 1.06 0M19.388 12a.75.75 0 0 1 .75-.75h1.418a.75.75 0 0 1 0 1.5h-1.418a.75.75 0 0 1-.75-.75m-2.084 5.038a.75.75 0 0 1 1.06.01l.773.787a.75.75 0 1 1-1.07 1.051l-.773-.788a.75.75 0 0 1 .01-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.533 3.77A8.23 8.23 0 0 0 4.305 12a8.23 8.23 0 0 0 8.228 8.23.75.75 0 0 1 0 1.5c-5.374 0-9.728-4.356-9.728-9.73 0-5.372 4.354-9.728 9.728-9.728a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunRightOutline;
