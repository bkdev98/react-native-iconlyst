import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLikeTwoTone = ({
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
      d="M12.504 5.123c-.73-.54-1.574-1.154-2.466-1.305a5.74 5.74 0 0 0-2.672.18C4.03 5.083 2.832 8.73 3.854 11.915c1.576 5.052 8.65 8.356 8.65 8.356"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.504 5.123c.726-.545 1.571-1.162 2.465-1.314a5.7 5.7 0 0 1 2.673.189c3.338 1.075 4.525 4.73 3.503 7.916-1.674 5.111-8.641 8.356-8.641 8.356"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartLikeTwoTone;
