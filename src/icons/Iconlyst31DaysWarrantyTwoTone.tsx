import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DaysWarrantyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.99 7.188a2.2 2.2 0 0 1 2.2-2.2h1c.58 0 1.137-.23 1.55-.638l.698-.7a2.2 2.2 0 0 1 3.112-.01h0l.01.008.7.7c.41.41.968.64 1.549.64h1.002a2.2 2.2 0 0 1 2.2 2.2v1c0 .58.23 1.137.64 1.55l.7.7a2.2 2.2 0 0 1 .01 3.11v.002l-.01.009-.7.7c-.41.411-.639.967-.639 1.548v1.004a2.2 2.2 0 0 1-2.2 2.196h-1.005c-.58 0-1.138.23-1.55.64l-.7.699a2.2 2.2 0 0 1-3.109.014l-.003-.002-.008-.01-.7-.698a2.2 2.2 0 0 0-1.55-.64H7.19a2.2 2.2 0 0 1-2.199-2.2v-1.005c0-.58-.23-1.137-.64-1.548l-.699-.7a2.2 2.2 0 0 1-.01-3.113l.008-.008.7-.7c.409-.413.64-.97.64-1.55v-.998"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.966 14.325a1.75 1.75 0 1 0 1.239-2.987l1.754-2.174H8.905M15.096 9.164v5.47"
    />
  </Svg>
);
export default Iconlyst31DaysWarrantyTwoTone;
