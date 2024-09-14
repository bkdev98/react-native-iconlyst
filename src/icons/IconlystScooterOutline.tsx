import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterOutline = ({
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
      d="M10.232 5.57a.41.41 0 0 0-.39.29L8.813 9.5l1.905 1.43a2.95 2.95 0 0 1 1.18 2.362v4.314h3.874q.3 0 .593-.076a2.97 2.97 0 1 1 .664 1.367c-.397.133-.82.209-1.257.209H7.938a1 1 0 0 1-.15-.015 2.97 2.97 0 1 1-1.805-5.088l2.414-8.548c.231-.82.992-1.384 1.835-1.384h1.585a.75.75 0 0 1 0 1.5zM6.18 15.563q.06.03.127.05a1.47 1.47 0 1 1-.127-.05m1.218-1.054.978-3.463 1.442 1.083c.366.274.581.704.581 1.162v4.314h-1.78a2.966 2.966 0 0 0-1.22-3.095m11.883.98a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScooterOutline;
