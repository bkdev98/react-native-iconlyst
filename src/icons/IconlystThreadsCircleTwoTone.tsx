import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThreadsCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.618 9.974q-.288-1.09-.907-1.871C14.876 7.05 13.655 6.51 12.082 6.5h-.006c-1.57.011-2.777.552-3.589 1.609-.721.94-1.094 2.248-1.106 3.887v.008c.012 1.64.385 2.947 1.106 3.887.812 1.057 2.019 1.598 3.589 1.609h.006c1.396-.01 2.38-.384 3.19-1.214 1.063-1.088 1.172-2.88 0-3.925-.794-.71-1.997-.852-3.075-.789-1.332.08-1.94.84-1.902 1.561.097 1.871 2.378 2.03 3.421.667.678-.885.688-2.056.342-3.117-.582-1.785-2.702-1.769-3.763-.452"
    />
  </Svg>
);
export default IconlystThreadsCircleTwoTone;
