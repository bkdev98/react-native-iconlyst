import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownSquareTwoTone = ({
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
      d="M3.5 16.468V8.033c0-2.948 2.081-4.783 5.026-4.783h7.948c2.945 0 5.026 1.835 5.026 4.784v8.434c0 2.948-2.081 4.782-5.026 4.782H8.526c-2.945 0-5.026-1.843-5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.24 14.072-1.944 1.944-1.944-1.944"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.295 16.02v-4.616a2.92 2.92 0 1 1 5.84 0v4.283"
    />
  </Svg>
);
export default IconlystTurnDownSquareTwoTone;
