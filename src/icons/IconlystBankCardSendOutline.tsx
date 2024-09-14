import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSendOutline = ({
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
      d="M3.77 5.023c.843-.904 2.04-1.406 3.445-1.406h10.07c1.407 0 2.605.502 3.448 1.407C21.57 5.923 22 7.158 22 8.534v3.075a.75.75 0 0 1-1.5 0V8.533c0-1.065-.33-1.913-.865-2.487-.529-.568-1.313-.929-2.35-.929H7.215c-1.033 0-1.818.36-2.348.93C4.331 6.62 4 7.468 4 8.532v6.589c0 1.065.33 1.913.865 2.487.529.568 1.313.929 2.35.929h4.802a.75.75 0 0 1 0 1.5H7.215c-1.407 0-2.606-.502-3.448-1.407-.837-.899-1.267-2.134-1.267-3.51V8.534c0-1.376.432-2.611 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.451 9.344a.75.75 0 0 1 .75-.75H17.3a.75.75 0 0 1 0 1.5H7.2a.75.75 0 0 1-.75-.75M14.178 17.586a.75.75 0 0 1 .75-.75h6.321a.75.75 0 1 1 0 1.5h-6.321a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.662 15.006a.75.75 0 0 1 1.06-.002l2.056 2.047a.75.75 0 0 1 0 1.063l-2.055 2.048a.75.75 0 1 1-1.059-1.063l1.522-1.517-1.522-1.515a.75.75 0 0 1-.002-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardSendOutline;
