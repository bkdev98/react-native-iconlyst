import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainBroken = ({
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
      d="M18.814 16.574a4.14 4.14 0 0 0 2.436-3.775c0-2.595-1.83-4.139-4.103-4.14 0-.967-.448-2.505-1.564-3.6M12.25 3.762c-3.617 0-4.897 3.265-4.897 4.898-2.27.02-4.103 1.545-4.103 4.14 0 1.68 1 3.126 2.436 3.775M14.176 15.588a2.726 2.726 0 1 1-3.853 0l1.925-1.928"
    />
  </Svg>
);
export default IconlystCloudRainBroken;
