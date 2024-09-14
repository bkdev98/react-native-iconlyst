import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarTwoTonecurved = ({
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
      d="M12 3C9.964 3 9.771 6.547 8.56 7.8c-1.213 1.253-4.982-.18-5.505 2.044s2.867 2.98 3.285 4.89c.42 1.909-1.65 4.59.12 5.926 1.77 1.334 3.674-1.685 5.54-1.685"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3c2.036 0 2.23 3.547 3.442 4.8 1.211 1.253 4.98-.18 5.503 2.044s-2.866 2.98-3.285 4.89 1.65 4.59-.12 5.926c-1.77 1.334-3.674-1.685-5.54-1.685"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarTwoTonecurved;
