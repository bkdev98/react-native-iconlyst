import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep3Outline = ({
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
      d="M17.722 18.135H6.78a3.033 3.033 0 0 1-2.745-4.323l.467-.991a4.6 4.6 0 0 0 .432-1.936v-1.32a.75.75 0 0 1 1.5.001v1.319a6.1 6.1 0 0 1-.576 2.574l-.466.991a1.532 1.532 0 0 0 1.387 2.185h10.943a1.532 1.532 0 0 0 1.387-2.185l-.466-.991a6.1 6.1 0 0 1-.575-2.574V9.566a5.823 5.823 0 0 0-5.816-5.816.75.75 0 1 1 0-1.5 7.324 7.324 0 0 1 7.316 7.316v1.318c0 .67.148 1.33.433 1.937l.466.991a3.033 3.033 0 0 1-2.745 4.323z"
    />
    <Path
      fill={props.color}
      d="M9.21 7.394H7a.75.75 0 0 1-.555-1.254l1.074-1.183H7a.75.75 0 1 1 0-1.5h2.21a.75.75 0 0 1 .556 1.254L8.693 5.894h.518a.75.75 0 1 1 0 1.5M14.226 12.952h-3.075a.75.75 0 0 1-.556-1.254l1.944-2.144h-1.388a.75.75 0 1 1 0-1.5h3.08a.75.75 0 0 1 .556 1.254l-1.944 2.144h1.388a.75.75 0 1 1 0 1.5zM12.251 21.75a3.853 3.853 0 0 1-3.849-3.85.75.75 0 1 1 1.5 0 2.35 2.35 0 0 0 4.7 0 .75.75 0 0 1 1.5 0 3.854 3.854 0 0 1-3.85 3.85"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep3Outline;
