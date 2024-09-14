import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLoveLikeOutline = ({
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
      d="M16.646 15.026c-.632.204-.972.935-.712 1.749.21.654.805 1.3 1.446 1.82.297.242.58.438.794.575.215-.14.502-.338.802-.582.646-.525 1.238-1.17 1.44-1.81v-.003c.26-.811-.081-1.543-.714-1.749a1.21 1.21 0 0 0-1.08.184.75.75 0 0 1-.898-.002c-.308-.23-.71-.3-1.078-.182m1.528 5.021-.359.659-.003-.002-.008-.005-.025-.014-.088-.05a10.594 10.594 0 0 1-1.257-.875c-.697-.567-1.58-1.442-1.928-2.527-.435-1.358.036-3.106 1.681-3.635l.003-.001a2.7 2.7 0 0 1 1.986.139 2.7 2.7 0 0 1 1.978-.14l.006.002c1.642.529 2.12 2.274 1.685 3.633-.34 1.077-1.226 1.954-1.922 2.52a11 11 0 0 1-1.35.933l-.026.014-.008.005h-.002l-.001.001zm0 0 .362.657a.75.75 0 0 1-.72.002z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.635 20.29a4.88 4.88 0 0 1-3.524-1.433 5.76 5.76 0 0 1-1.62-4.132v-5.95A5.26 5.26 0 0 1 7.65 3.203h8.5a5.257 5.257 0 0 1 5.157 5.572v1.615a.75.75 0 0 1-1.5 0V8.775c0-2.36-1.538-4.072-3.657-4.072h-8.5c-2.12 0-3.657 1.712-3.657 4.072v5.946a4.28 4.28 0 0 0 1.179 3.07 3.53 3.53 0 0 0 2.476.995h4.173a.75.75 0 0 1 0 1.5H7.635z"
    />
    <Path
      fill={props.color}
      d="M11.92 13.331a2.73 2.73 0 0 1-1.699-.6L6.337 9.6a.75.75 0 1 1 .94-1.168l3.88 3.13a1.23 1.23 0 0 0 1.539 0l3.839-3.124a.75.75 0 1 1 .947 1.164l-3.845 3.13a2.75 2.75 0 0 1-1.716.6"
    />
  </Svg>
);
export default IconlystEmailLoveLikeOutline;
