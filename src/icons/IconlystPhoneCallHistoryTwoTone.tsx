import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHistoryTwoTone = ({
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
      d="M11.651 12.82c3.716 3.716 4.82-.844 7.187 1.52 2.28 2.28 3.592 2.737.703 5.626-.363.291-2.663 3.792-10.746-4.289S4.21 5.293 4.5 4.931c2.897-2.896 3.346-1.579 5.627.702 2.365 2.366-2.192 3.473 1.524 7.188"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.867 10.295a3.632 3.632 0 1 0 .001-7.263 3.632 3.632 0 0 0 0 7.263"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.996 7.608-1.148-.687V5.445"
    />
  </Svg>
);
export default IconlystPhoneCallHistoryTwoTone;
