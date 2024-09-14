import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DaysWarrantyBroken = ({
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
      d="M8.967 14.323a1.75 1.75 0 1 0 1.24-2.987l1.753-2.174H8.906M15.096 9.162v5.47M4.99 7.188a2.2 2.2 0 0 1 2.2-2.2h1c.58 0 1.137-.23 1.55-.638l.698-.7a2.2 2.2 0 0 1 3.112-.01h0l.01.008.7.7c.41.41.968.64 1.549.64h1.002a2.2 2.2 0 0 1 2.2 2.2M7.19 19.01a2.2 2.2 0 0 1-2.199-2.2v-1.005c0-.58-.23-1.137-.64-1.548l-.699-.7a2.2 2.2 0 0 1-.015-3.109l.712-.713c.41-.412.64-.97.64-1.55v-.997M19.65 9.738l.7.7a2.2 2.2 0 0 1 .011 3.112l-.71.71c-.409.411-.639.967-.639 1.548v1.004a2.2 2.2 0 0 1-2.2 2.196h-1.005c-.58 0-1.138.23-1.55.64l-.7.699a2.2 2.2 0 0 1-3.11.013l-.71-.71"
    />
  </Svg>
);
export default Iconlyst31DaysWarrantyBroken;
