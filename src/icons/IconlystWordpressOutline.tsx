import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWordpressOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.444 7.762a.75.75 0 0 1 .75-.75h3.034a.75.75 0 0 1 0 1.5H4.194a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.147 7.055a.75.75 0 0 1 .958.456l3.47 9.801a.75.75 0 1 1-1.413.5l-3.471-9.8a.75.75 0 0 1 .456-.957M8.685 7.762a.75.75 0 0 1 .75-.75h4.735a.75.75 0 0 1 0 1.5H9.435a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.09 7.055a.75.75 0 0 1 .957.456l3.471 9.801a.75.75 0 1 1-1.414.5l-3.47-9.8a.75.75 0 0 1 .456-.957"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.967 8.149c-1.234-1.475-.297-3.743 1.713-3.743a.75.75 0 0 1 0 1.5c-.66 0-1.03.722-.563 1.28.67.801 1.342 1.688 1.791 2.592a5.9 5.9 0 0 0 .154-2.14.75.75 0 1 1 1.49-.166 7.4 7.4 0 0 1-.413 3.385l-.867 2.071-2.366 6.673c-.464 1.31-2.306 1.335-2.806.039L9.642 8.08a.75.75 0 1 1 1.4-.54l4.454 11.55 2.37-6.689c.182-.497.103-1.11-.263-1.876-.363-.763-.96-1.568-1.636-2.376"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.4 7.963a.75.75 0 0 1 .974.42l.349.878 3.79 9.83 2.688-7.34a.75.75 0 1 1 1.408.516l-2.687 7.339c-.467 1.305-2.305 1.328-2.805.034L3.324 9.804l-.344-.867a.75.75 0 0 1 .42-.974"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWordpressOutline;
