import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCircleLight = ({
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
      d="M18.478 5.636A9 9 0 1 1 5.75 18.364 9 9 0 0 1 18.478 5.636"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.163 13.264c-.025-.013-.056.01-.047.038a5.104 5.104 0 0 0 4.9 3.698 5.1 5.1 0 0 0 1.405-9.999c-.027-.008-.05.022-.037.048a4.605 4.605 0 0 1-.815 5.406 4.6 4.6 0 0 1-5.406.81"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.99 7.82.01.01M9.065 10.71l.01.01"
    />
  </Svg>
);
export default IconlystMoonCircleLight;
