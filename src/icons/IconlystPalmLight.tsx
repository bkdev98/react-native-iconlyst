import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPalmLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.336 11.796V12m0-.205v.837m0-.837v-.5a2.02 2.02 0 0 1 2.019-2.015 1.34 1.34 0 0 1 1.342 1.333c.004 1.157.004 2.737-.027 3.33-.094 1.862-.482 3.633-1.944 5.095A6.693 6.693 0 0 1 5.3 14.305l.002-7.03c0-.912.765-1.674 1.676-1.673.912 0 1.673.762 1.674 1.673v3.683"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.337 11.797V5.94a1.69 1.69 0 0 0-1.673-1.601 1.69 1.69 0 0 0-1.669 1.571v4.38M11.995 5.911v-1.31A1.69 1.69 0 0 0 10.323 3a1.69 1.69 0 0 0-1.67 1.603v2.673M15.335 12.633c-1.8-.002-3.345 1.525-3.34 3.344"
    />
  </Svg>
);
export default IconlystPalmLight;
