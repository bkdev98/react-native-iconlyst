import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCheckLight = ({
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
      d="m21.049 12.575-.018-4.389c-.006-2.81-1.762-4.793-4.577-4.786l-8.05.018c-2.807.007-4.561 1.997-4.554 4.81l.017 7.585c.007 2.812 1.762 4.794 4.577 4.787l3.785-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.151 3.4.016 6.373-2.706-.882-2.723.898-.008-6.366M15.484 18.516l2.08 2.084 4.286-4.289"
    />
  </Svg>
);
export default IconlystDeliveryCheckLight;
