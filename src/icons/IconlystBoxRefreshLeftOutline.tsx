import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoxRefreshLeftOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.53 14.53a.75.75 0 0 0 0-1.06L11.06 11l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.75 15.971a3.75 3.75 0 0 1-3.75 3.75H7a3.75 3.75 0 0 1-3.75-3.75v-2.5a.75.75 0 0 1 1.5 0v2.5A2.25 2.25 0 0 0 7 18.221h10a2.25 2.25 0 0 0 2.25-2.25v-2a2.25 2.25 0 0 0-2.25-2.25h-6.685a.75.75 0 1 1 0-1.5H17a3.75 3.75 0 0 1 3.75 3.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoxRefreshLeftOutline;
