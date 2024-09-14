import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardTwoTone = ({
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
      d="M13.973 3a2.05 2.05 0 0 1 1.48.63l3.791 3.95c.366.381.571.89.571 1.42v8.28a3.72 3.72 0 0 1-3.72 3.72h-7.19a3.72 3.72 0 0 1-3.72-3.722V6.721A3.72 3.72 0 0 1 8.905 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.504 12.856h3.992"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSimcardTwoTone;
