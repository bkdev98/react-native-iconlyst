import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedTwoTonecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.328 3.146-6 6m0-6 6 6"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.701 16.695C.802 9.796 1.783 6.637 2.511 5.618c.093-.163 2.395-3.61 4.864-1.588 6.126 5.045-1.63 4.332 3.515 9.477 5.144 5.144 4.43-2.611 9.476 3.514 2.022 2.469-1.425 4.77-1.588 4.864-1.02.728-4.178 1.709-11.077-5.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallMissedTwoTonecurved;
