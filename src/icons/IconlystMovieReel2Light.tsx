import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReel2Light = ({
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
      d="M5.139 11.794a8.347 8.347 0 1 1 8.347 8.347 8.347 8.347 0 0 1-8.347-8.347"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.487 9.225a1.372 1.372 0 1 0 0-2.743 1.372 1.372 0 0 0 0 2.743M13.487 17.103a1.372 1.372 0 1 0 0-2.743 1.372 1.372 0 0 0 0 2.743M8.176 11.794a1.372 1.372 0 1 0 2.743 0 1.372 1.372 0 0 0-2.743 0M16.053 11.794a1.372 1.372 0 1 0 2.743 0 1.372 1.372 0 0 0-2.743 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.834 20.062s.796-.69 1.751-.567c.955.124 1.27 1.062 2.565 1.062s2.174-1.003 2.174-1.003"
    />
  </Svg>
);
export default IconlystMovieReel2Light;
