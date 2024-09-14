import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReelBroken = ({
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
      d="M17.091 4.774a8.868 8.868 0 1 0 2.357 2.489"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.952 17.642a1.458 1.458 0 1 0-1.458-1.458M6.312 12a1.458 1.458 0 1 0 1.457-1.457M10.494 7.817a1.458 1.458 0 1 1 1.458 1.457M17.592 12a1.458 1.458 0 1 0-1.458 1.458M11.951 20.867h9.133"
    />
  </Svg>
);
export default IconlystMovieReelBroken;
