import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHideBroken = ({
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
      d="M9.092 5.841a4.105 4.105 0 0 1 3.846-2.833c2.264-.019 4.13 1.79 4.16 4.055v2.615M8.546 9.992a6.404 6.404 0 0 0 4.443 11.018c.88 0 1.72-.177 2.484-.498M19.114 20.56 5.1 6.548"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.32 15.614q.08-.497.08-1.017a6.41 6.41 0 0 0-8.28-6.131"
    />
  </Svg>
);
export default IconlystLockHideBroken;
