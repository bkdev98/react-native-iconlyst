import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube5Broken = ({
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
      d="M4.433 12.073v3.128a2.42 2.42 0 0 0 1.209 2.095l5.648 3.26c.749.434 1.67.434 2.42 0l5.647-3.26a2.42 2.42 0 0 0 1.21-2.095V8.68a2.42 2.42 0 0 0-1.21-2.095l-5.648-3.26a2.42 2.42 0 0 0-2.419 0l-5.648 3.26a2.42 2.42 0 0 0-1.21 2.095v.342M12.531 12.013V21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.748 7.52 7.783 4.493 7.784-4.493"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.516 18.97V9.694l6.007-3.468"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.556 13.1-6.024 3.478-6.024-3.424"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.516 5.058 7.97 4.673v6.804"
    />
  </Svg>
);
export default IconlystCube5Broken;
