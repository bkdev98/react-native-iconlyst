import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabase3LevelBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 13.238c-4.206 0-7.615-1.42-7.615-3.171V6.17M19.615 6.172v3.897c0 1.068-1.268 2.012-3.21 2.587"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.615 9.875v3.897c0 1.75-3.41 3.171-7.615 3.171M4.385 9.875v3.897c0 1.227 1.675 2.292 4.127 2.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 21c-4.206 0-7.615-1.419-7.615-3.17v-3.896M19.615 13.934v3.896c0 1.11-1.37 2.086-3.443 2.653M12 3C7.794 3 4.385 4.42 4.385 6.17c0 1.752 3.409 3.172 7.615 3.172s7.615-1.42 7.615-3.171c0-1.104-1.354-2.076-3.408-2.644"
    />
  </Svg>
);
export default IconlystDatabase3LevelBroken;
