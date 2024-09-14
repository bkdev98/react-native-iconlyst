import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBrokencurved = ({
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
      d="M8.587 7.406c1.306-.43 3.141-3.096 5.172-1.897.823.582 1.306 1.53 1.503 3.615M8.175 16.21c-1.082-.25-1.816-.053-2.72-.814-1.01-.86-1.02-2.3-1.01-3.525-.01-1.226 0-2.666 1.01-3.525M15.351 13.329c-.116 3.006-.635 4.214-1.592 4.893-1.038.618-2.03.215-2.917-.384M20.057 4.328 4.713 19.673"
    />
  </Svg>
);
export default IconlystVolumeOffBrokencurved;
