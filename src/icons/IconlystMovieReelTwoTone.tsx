import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReelTwoTone = ({
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
      d="M21.07 12a8.868 8.868 0 1 0-17.737.002A8.868 8.868 0 0 0 21.069 12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.202 17.642a1.458 1.458 0 1 1 0-2.916 1.458 1.458 0 0 1 0 2.915M9.477 12a1.458 1.458 0 1 1-2.916 0 1.458 1.458 0 0 1 2.916 0M12.202 9.274a1.458 1.458 0 1 1 0-2.915 1.458 1.458 0 0 1 0 2.915M17.842 12a1.458 1.458 0 1 1-2.916 0 1.458 1.458 0 0 1 2.916 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.201 20.867h9.133"
    />
  </Svg>
);
export default IconlystMovieReelTwoTone;
