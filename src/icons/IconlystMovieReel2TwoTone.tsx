import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReel2TwoTone = ({
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
      d="M4.64 11.794a8.348 8.348 0 1 1 8.347 8.347 8.347 8.347 0 0 1-8.347-8.347"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.987 9.225a1.372 1.372 0 1 0 0-2.743 1.372 1.372 0 0 0 0 2.743M12.987 17.103a1.372 1.372 0 1 0 0-2.743 1.372 1.372 0 0 0 0 2.743M7.677 11.794a1.372 1.372 0 1 0 2.743 0 1.372 1.372 0 0 0-2.743 0M15.553 11.794a1.372 1.372 0 1 0 2.743 0 1.372 1.372 0 0 0-2.743 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.334 20.062s.796-.69 1.751-.567c.955.124 1.27 1.062 2.565 1.062s2.174-1.003 2.174-1.003"
    />
  </Svg>
);
export default IconlystMovieReel2TwoTone;
