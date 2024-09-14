import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube5TwoTone = ({
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
      d="M20.567 8.68V15.2a2.42 2.42 0 0 1-1.21 2.095l-5.648 3.26a2.42 2.42 0 0 1-2.419 0l-5.648-3.26a2.42 2.42 0 0 1-1.21-2.095V8.68a2.42 2.42 0 0 1 1.21-2.095l5.648-3.26a2.42 2.42 0 0 1 2.42 0l5.647 3.26a2.42 2.42 0 0 1 1.21 2.095M12.531 12.013V21"
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
      d="M16.548 5.058 8.516 9.695v9.274"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.5 12.013 8.032 4.565 8.032-4.638"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.516 5.058 7.97 4.673-.001 9.238"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCube5TwoTone;
