import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraPlayBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.518 13.058a9.2 9.2 0 0 1-2.69 1.704c-.868.345-1.596-.086-1.703-.95a17.2 17.2 0 0 1 0-3.63c.117-.898.918-1.279 1.703-.946a9 9 0 0 1 2.69 1.704c.669.612.685 1.482 0 2.118"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.723 19.245c2.374 0 3.852-1.676 3.852-4.047V8.801c0-2.371-1.478-4.047-3.85-4.047H5.933c-2.367 0-3.85 1.676-3.85 4.047v6.397c0 2.371 1.476 4.047 3.85 4.047h3.395"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.568 14.013 3.407 2.788a1.292 1.292 0 0 0 2.11-1v-3.223M16.568 9.992l3.394-2.787a1.291 1.291 0 0 1 2.11.996l.003.9"
    />
  </Svg>
);
export default IconlystVideoCameraPlayBroken;
