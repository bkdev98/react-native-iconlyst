import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddLikeBroken = ({
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
      d="M14.05 20.863a9 9 0 0 1-6.192-16.59M12.477 3a9 9 0 0 1 8.675 11.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.476 15.722s2.846-1.561 3.484-3.587c.41-1.278-.072-2.74-1.415-3.173a2.31 2.31 0 0 0-2.069.35 2.29 2.29 0 0 0-2.071-.35c-1.343.433-1.82 1.895-1.412 3.173.22.683.68 1.309 1.195 1.84M18.351 16.542v3.546m1.775-1.772h-3.55"
    />
  </Svg>
);
export default IconlystAddLikeBroken;
