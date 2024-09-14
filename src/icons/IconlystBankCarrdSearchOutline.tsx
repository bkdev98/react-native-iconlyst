import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdSearchOutline = ({
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
      d="M3.77 5.07c.843-.904 2.04-1.406 3.445-1.406h10.07c1.407 0 2.605.502 3.448 1.407C21.57 5.969 22 7.205 22 8.58v2.923a.75.75 0 0 1-1.5 0V8.58c0-1.065-.33-1.913-.865-2.487-.529-.568-1.313-.929-2.35-.929H7.215c-1.033 0-1.818.36-2.348.93C4.331 6.667 4 7.514 4 8.58v6.588c0 1.067.33 1.914.865 2.488.529.568 1.313.929 2.35.929h4.157a.75.75 0 0 1 0 1.5H7.215c-1.407 0-2.605-.502-3.448-1.407-.837-.898-1.267-2.134-1.267-3.51V8.58c0-1.376.432-2.611 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.71a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M18.686 14.398a2.172 2.172 0 1 0-3.071 3.07 2.172 2.172 0 0 0 3.071-3.07m-4.132-1.06a3.671 3.671 0 1 1 5.193 5.19 3.671 3.671 0 0 1-5.193-5.19"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.687 17.47a.75.75 0 0 1 1.06 0l1.583 1.583a.75.75 0 0 1-1.06 1.06l-1.584-1.583a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdSearchOutline;
