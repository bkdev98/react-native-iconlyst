import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarCircleBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.916a9 9 0 1 1 3.02-.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.462 9.632.766 1.532c.076.15.221.254.389.278l1.714.247a.508.508 0 0 1 .286.868l-1.24 1.192a.5.5 0 0 0-.148.45l.293 1.683a.515.515 0 0 1-.75.536l-1.531-.794a.52.52 0 0 0-.481 0l-1.533.795a.515.515 0 0 1-.749-.537l.294-1.682a.5.5 0 0 0-.149-.45l-1.241-1.192a.508.508 0 0 1 .286-.869l1.714-.247a.52.52 0 0 0 .39-.278l.767-1.532a.52.52 0 0 1 .923 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarCircleBroken;
