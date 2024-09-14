import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteBold = ({
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
      fillRule="evenodd"
      d="M14.603 14.8H9.897a.75.75 0 0 1 0-1.5h4.706a.75.75 0 0 1 0 1.5M5.65 10.347a.3.3 0 0 0-.3.322l.605 8.12A3.52 3.52 0 0 0 9.444 22h5.613a3.52 3.52 0 0 0 3.488-3.217l.604-8.116a.3.3 0 0 0-.3-.322zM19.04 4.732h-1.877a.5.5 0 0 1-.456-.297l-.424-.951A2.5 2.5 0 0 0 13.999 2h-3.497c-.987 0-1.883.583-2.284 1.484l-.424.952a.5.5 0 0 1-.456.296H5.461a2.066 2.066 0 0 0-2.064 2.063c0 1.138.926 2.064 2.064 2.064H19.04a2.066 2.066 0 0 0 2.063-2.064 2.065 2.065 0 0 0-2.063-2.063"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeleteBold;
