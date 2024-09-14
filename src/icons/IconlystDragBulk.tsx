import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDragBulk = ({
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
      fill={props.color}
      d="m13.436 5.906.045 2.93c2.483.237 6.077.108 7.08 2.818 1.011 2.726.017 6.335-1.753 8.105-2.26 2.258-8.57 2.43-10.637-.139-1.312-1.63-2.331-3.61-2.974-5.383-.344-.951.162-1.977 1.106-2.34a1.94 1.94 0 0 1 2.29.71l1.27 1.842V4.273a1.774 1.774 0 0 1 3.547-.026l.002.129z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m6.726 4.116-.232.233h3.369v1.583H6.494l.232.232a.79.79 0 1 1-1.12 1.12L4.024 5.7a.8.8 0 0 1-.17-.863.8.8 0 0 1 .17-.256l1.584-1.583a.79.79 0 1 1 1.119 1.118M16.553 5.932h-3.049a.3.3 0 0 1-.072-.013l-.02-1.554a.3.3 0 0 1 .092-.016h3.049a2.37 2.37 0 0 1 2.229-1.583 2.38 2.38 0 0 1 2.375 2.375 2.38 2.38 0 0 1-2.375 2.375 2.37 2.37 0 0 1-2.23-1.584"
    />
  </Svg>
);
export default IconlystDragBulk;
