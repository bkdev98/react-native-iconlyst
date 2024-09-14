import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRightLight = ({
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
      d="m7.216 13.983 2.229-2.68-4.666-4.744c.545-.485 1.02-.986 1.573-1.381.643-.46 1.389-.386 2.101-.14 1.632.567 3.264 1.137 4.88 1.743.41.154.656.084.947-.218.84-.867 1.685-1.732 2.581-2.538.924-.831 2.571-1.55 3.617-.504 1.047 1.046.328 2.693-.503 3.617-.807.896-1.673 1.74-2.54 2.582-.3.29-.37.537-.217.946a203 203 0 0 1 1.742 4.881c.247.712.32 1.458-.139 2.1-.395.552-.895 1.029-1.381 1.574l-4.743-4.667-2.695 2.216.287 2.771L8.83 21l-2.187-3.645L3 15.168l1.458-1.458z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneRightLight;
