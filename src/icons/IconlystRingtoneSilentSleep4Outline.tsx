import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep4Outline = ({
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
      d="M17.722 18.136H6.78a3.033 3.033 0 0 1-2.745-4.323l.467-.992a4.6 4.6 0 0 0 .432-1.935v-1.32a7.316 7.316 0 1 1 14.633 0v1.317c0 .67.148 1.332.433 1.938l.466.99a3.034 3.034 0 0 1-2.745 4.323zM12.252 3.75a5.823 5.823 0 0 0-5.818 5.816v1.319a6.1 6.1 0 0 1-.575 2.574l-.466.99a1.532 1.532 0 0 0 1.387 2.186h10.943a1.532 1.532 0 0 0 1.387-2.185l-.466-.992a6.1 6.1 0 0 1-.575-2.573v-1.32a5.823 5.823 0 0 0-5.818-5.815"
    />
    <Path
      fill={props.color}
      d="M12.251 21.75a3.853 3.853 0 0 1-3.849-3.85.75.75 0 1 1 1.5 0 2.35 2.35 0 0 0 4.7 0 .75.75 0 0 1 1.5 0 3.854 3.854 0 0 1-3.85 3.85M13.792 13.188h-3.08a.75.75 0 0 1-.556-1.254L12.1 9.791H10.71a.75.75 0 1 1 0-1.5h3.08a.75.75 0 0 1 .556 1.254l-1.944 2.143h1.388a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep4Outline;
