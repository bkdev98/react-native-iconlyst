import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPatreonBulk = ({
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
      d="M16.216 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53V8.031c0-3.308-2.123-5.531-5.284-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.148 13.259a3.443 3.443 0 0 1-3.44-3.44 3.443 3.443 0 0 1 3.44-3.44 3.443 3.443 0 0 1 3.439 3.44 3.443 3.443 0 0 1-3.44 3.44m-1.94-3.441c0-1.069.87-1.939 1.94-1.939s1.939.87 1.939 1.939c0 1.071-.87 1.941-1.94 1.941a1.94 1.94 0 0 1-1.938-1.941M10.824 15.889c0 .949-.774 1.72-1.724 1.72H7.62a1.723 1.723 0 0 1-1.723-1.72v-7.78c0-.954.772-1.73 1.723-1.73H9.1c.95 0 1.724.776 1.724 1.73zM7.62 7.879H9.1c.123 0 .224.104.224.23v7.78a.22.22 0 0 1-.224.22H7.621a.22.22 0 0 1-.223-.22v-7.78c0-.126.099-.23.223-.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPatreonBulk;
