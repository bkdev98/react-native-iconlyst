import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityOutlinecurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.712 10.272a.75.75 0 0 1 .134 1.052l-2.93 3.78a.75.75 0 0 1-1.055.13l-2.818-2.212-2.532 3.29a.75.75 0 1 1-1.188-.916l2.993-3.889a.75.75 0 0 1 1.057-.132l2.82 2.214 2.467-3.184a.75.75 0 0 1 1.052-.133M19.667 4.1a1.171 1.171 0 1 0-.001 2.343 1.171 1.171 0 0 0 .001-2.343m-2.672 1.172a2.671 2.671 0 1 1 5.343-.001 2.671 2.671 0 0 1-5.343.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.003 6.607C3.78 7.83 3.2 9.877 3.2 13.303c0 3.427.581 5.474 1.804 6.696 1.223 1.223 3.27 1.804 6.697 1.804s5.473-.58 6.696-1.804c1.223-1.222 1.803-3.268 1.803-6.696 0-1.106-.06-2.075-.185-2.924a.75.75 0 1 1 1.483-.22c.14.941.203 1.988.203 3.144 0 3.51-.576 6.09-2.244 7.757-1.667 1.668-4.246 2.243-7.756 2.243s-6.09-.575-7.757-2.243c-1.668-1.668-2.244-4.246-2.244-7.757s.576-6.089 2.244-7.757S8.189 3.303 11.7 3.303c1.135 0 2.163.06 3.09.195a.75.75 0 1 1-.215 1.484c-.837-.121-1.79-.179-2.875-.179-3.427 0-5.474.581-6.697 1.804"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystActivityOutlinecurved;
