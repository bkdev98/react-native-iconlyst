import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarStarShiningOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.804 13.786a.75.75 0 0 1 .717.531 4.43 4.43 0 0 0 2.947 2.948.75.75 0 0 1 0 1.435 4.43 4.43 0 0 0-2.947 2.947.75.75 0 0 1-1.435 0A4.43 4.43 0 0 0 14.14 18.7a.75.75 0 0 1 0-1.435 4.43 4.43 0 0 0 2.947-2.948.75.75 0 0 1 .718-.531m-1.698 4.196a5.9 5.9 0 0 1 1.698 1.698 5.9 5.9 0 0 1 1.697-1.698 5.9 5.9 0 0 1-1.697-1.697 5.9 5.9 0 0 1-1.698 1.697M13.898 12.074a.75.75 0 0 1 .75-.75h1.634a.75.75 0 1 1 0 1.5h-1.634a.75.75 0 0 1-.75-.75M5.824 12.074a.75.75 0 0 1 .75-.75h1.634a.75.75 0 0 1 0 1.5H6.574a.75.75 0 0 1-.75-.75M2.511 8.162a.75.75 0 0 1 .848-.637c5.35.759 10.78.759 16.13 0a.75.75 0 1 1 .21 1.485 59 59 0 0 1-16.55 0 .75.75 0 0 1-.638-.848"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.606 3.26c2.538-.401 5.123-.401 7.662 0h.002a2.79 2.79 0 0 1 2.16 1.805l.952 2.646q.04.107.106.203l1.057 1.42c.53.722.816 1.595.816 2.491a.75.75 0 1 1-1.5.001c0-.577-.184-1.139-.524-1.604l-1.058-1.42-.01-.014a2.4 2.4 0 0 1-.297-.567V8.22l-.957-2.656a1.29 1.29 0 0 0-.983-.823 23.1 23.1 0 0 0-7.189 0c-.438.073-.829.403-.976.823l-.002.006-.958 2.661a2.3 2.3 0 0 1-.3.55l-1.075 1.48a2.7 2.7 0 0 0-.51 1.58v.004l-.016 4.733c0 .088.071.16.16.16h1.8a.16.16 0 0 0 .16-.16v-.372c0-.916.743-1.66 1.66-1.66h4.475a.75.75 0 0 1 0 1.5H7.785a.16.16 0 0 0-.16.16v.372a1.66 1.66 0 0 1-1.658 1.66H4.165a1.66 1.66 0 0 1-1.659-1.665l.015-4.728v-.002a4.2 4.2 0 0 1 .796-2.463L4.401 7.89a.8.8 0 0 0 .101-.184l.95-2.64A2.79 2.79 0 0 1 7.6 3.26z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarStarShiningOutline;
