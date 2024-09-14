import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySearchLight = ({
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
      d="m21.629 10.373-.018-2.315c-.007-2.906-1.822-4.955-4.731-4.949l-8.323.02c-2.9.008-4.714 2.065-4.707 4.972l.018 7.841c.007 2.907 1.822 4.956 4.73 4.949l3.914-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.118 18.567a3.195 3.195 0 1 1-4.518-4.518 3.195 3.195 0 0 1 4.518 4.518"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.117 18.567 1.731 1.73M15.533 3.11l.017 6.588-2.798-.911-2.815.928-.007-6.58"
    />
  </Svg>
);
export default IconlystDeliverySearchLight;
