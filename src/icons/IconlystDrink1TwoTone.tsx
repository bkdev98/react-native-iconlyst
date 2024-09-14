import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink1TwoTone = ({
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
      d="M6.576 6.972V4.036C6.576 3.464 7.041 3 7.613 3H8.7c.573 0 1.037.464 1.037 1.036v2.936c0 1.065.35 1.789.997 2.636l.316.415c.646.847.996 1.884.996 2.95v6.42c0 .888-.719 1.607-1.606 1.607H5.873a1.607 1.607 0 0 1-1.606-1.606v-6.421c0-1.066.35-2.103.997-2.95l.316-.415c.646-.847.996-1.57.996-2.636M6.578 5.924h3.16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.048 13.251H7.91v4.993h4.138"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.665 16.456V21m-1.542 0h3.085m-4.18-13.065-.39 4.944a3.07 3.07 0 1 0 6.054 0l-.39-4.944z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDrink1TwoTone;
