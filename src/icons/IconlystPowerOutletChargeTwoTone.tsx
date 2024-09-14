import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletChargeTwoTone = ({
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
      d="M8.435 9.174a5.054 5.054 0 0 0 5.55 5.03c2.626-.25 4.556-2.607 4.556-5.247V7.43A1.12 1.12 0 0 0 17.42 6.31H9.555c-.618 0-1.12.502-1.12 1.121z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.027 21c0-.74-.613-1.34-1.368-1.34h-1.056c-1.167-.006-2.11-.93-2.117-2.073V14.39"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.976 15.54-1.517 2.73h3.64L8.582 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.945 3v3.31M16.03 3v3.31"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerOutletChargeTwoTone;
