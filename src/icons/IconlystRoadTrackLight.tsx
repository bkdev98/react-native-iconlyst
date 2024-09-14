import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadTrackLight = ({
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
      d="m14.928 15.643 2.049 2.049m0 0 2.049 2.049m-2.05-2.05 2.05-2.048m-2.05 2.049-2.048 2.049M8.554 6.536a2.277 2.277 0 1 1-4.554 0 2.277 2.277 0 0 1 4.554 0M17.268 6.08 20 8.812l-2.732 2.732"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 8.813C9.07 7.447 7.25 16.553 7.705 19.286"
    />
  </Svg>
);
export default IconlystRoadTrackLight;
