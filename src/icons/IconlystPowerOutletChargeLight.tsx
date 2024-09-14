import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletChargeLight = ({
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
      d="M7.935 9.174a5.054 5.054 0 0 0 5.55 5.03c2.626-.25 4.556-2.607 4.556-5.247V7.43A1.12 1.12 0 0 0 16.92 6.31H9.055c-.618 0-1.12.502-1.12 1.121z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.527 21c0-.74-.613-1.34-1.368-1.34h-1.056c-1.167-.006-2.11-.93-2.117-2.073V14.39M7.476 15.54l-1.517 2.73h3.64L8.082 21M10.445 3v3.31M15.53 3v3.31"
    />
  </Svg>
);
export default IconlystPowerOutletChargeLight;
