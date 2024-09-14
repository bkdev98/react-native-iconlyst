import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffTwoTonecurved = ({
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
      d="M8.404 16.553c-1.083-.25-1.817-.053-2.72-.814-1.012-.859-1.02-2.3-1.012-3.525-.008-1.226 0-2.666 1.012-3.525 1.01-.86 1.816-.51 3.131-.94 1.306-.43 3.14-3.096 5.172-1.897.823.582 1.306 1.53 1.503 3.615"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.58 13.672c-.117 3.006-.636 4.214-1.593 4.894-1.038.618-2.031.215-2.917-.384"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.285 4.671 4.941 20.016"
    />
  </Svg>
);
export default IconlystVolumeOffTwoTonecurved;
