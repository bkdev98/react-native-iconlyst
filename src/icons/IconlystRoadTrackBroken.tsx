import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadTrackBroken = ({
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
      d="m14.928 15.643 2.049 2.049m0 0 2.049 2.049m-2.05-2.05 2.05-2.048m-2.05 2.049-2.048 2.049M4 6.535a2.277 2.277 0 1 0 2.277-2.277M17.268 6.08 20 8.812l-2.732 2.732"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.705 19.286C7.25 16.553 9.071 7.446 20 8.813"
    />
  </Svg>
);
export default IconlystRoadTrackBroken;
