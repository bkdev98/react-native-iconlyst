import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReel2Broken = ({
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
      d="M12.737 3.445a8.35 8.35 0 0 0-8.347 8.349 8.347 8.347 0 0 0 16.694 0c0-3.34-1.96-6.22-4.792-7.556"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.109 7.853a1.372 1.372 0 1 0-1.372 1.372M14.109 15.731a1.372 1.372 0 1 1-1.372-1.372M7.427 11.794a1.372 1.372 0 1 0 1.372-1.372M16.675 13.166a1.372 1.372 0 1 0-1.372-1.372M3.084 20.062s.796-.69 1.751-.567c.955.124 1.27 1.062 2.565 1.062s2.174-1.003 2.174-1.003"
    />
  </Svg>
);
export default IconlystMovieReel2Broken;
