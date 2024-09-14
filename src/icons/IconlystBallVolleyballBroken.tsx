import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallVolleyballBroken = ({
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12a8 8 0 0 0 8 4M8.761 15.531A12 12 0 0 0 16 20M12 12a8 8 0 0 0-7.464 4.929M9.747 7.566a12 12 0 0 0-6.675 3.898M12 12a8 8 0 0 0-.536-8.928M16.76 12.835a12 12 0 0 0 .168-8.298"
    />
  </Svg>
);
export default IconlystBallVolleyballBroken;
