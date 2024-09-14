import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperPlusTwoTonecurved = ({
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
      d="m20.41 8.3-5.67-5.4a18 18 0 0 0-2.45-.15C6 2.75 3.9 5.07 3.9 12c0 6.94 2.1 9.25 8.39 9.25 6.3 0 8.4-2.31 8.4-9.25 0-1.42-.09-2.65-.28-3.7"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.184 2.833v2.66a3.363 3.363 0 0 0 3.364 3.364H20.5M14.562 12.98h-4.9m2.451 2.45v-4.9"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPaperPlusTwoTonecurved;
