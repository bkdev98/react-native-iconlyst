import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraPlayLight = ({
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
      d="M6.684 4.754h6.79c2.373 0 3.85 1.676 3.85 4.046v6.398c0 2.371-1.477 4.047-3.851 4.047h-6.79c-2.373 0-3.849-1.676-3.849-4.047V8.8c0-2.37 1.483-4.046 3.85-4.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.268 13.058a9.2 9.2 0 0 1-2.69 1.704c-.868.345-1.596-.086-1.703-.95a17.2 17.2 0 0 1 0-3.63c.117-.898.918-1.279 1.703-.946a9 9 0 0 1 2.69 1.704c.669.612.685 1.482 0 2.118"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.318 9.99 3.407-2.788a1.292 1.292 0 0 1 2.109 1l-.012 7.602a1.291 1.291 0 0 1-2.11.995l-3.394-2.787"
    />
  </Svg>
);
export default IconlystVideoCameraPlayLight;
