import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpBoxTwoTone = ({
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
      d="M21.5 7.9v8.435c0 2.948-2.081 4.783-5.026 4.783H8.526c-2.945 0-5.026-1.835-5.026-4.784V7.9c0-2.948 2.081-4.782 5.026-4.782h7.948c2.945 0 5.026 1.843 5.026 4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.428 9.326 3.571-.708.708 3.572"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 8.618-4.535 6.775L6.9 13.007l-3.2 4.326"
    />
  </Svg>
);
export default IconlystTrendUpBoxTwoTone;
