import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystElectricChargingTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.724 18.924c0 1.222-.991 2.213-2.214 2.213h-1.38a.44.44 0 0 1-.44-.439v-3.55c0-.241.197-.438.44-.438h1.38c1.223 0 2.214.991 2.214 2.214M10.69 20.078H9.28m1.41-2.309H9.28"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.3 17.069a8.063 8.063 0 1 1 8.467 1.874"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.99 13.156 1.94-2.999h-3.858l1.939-3"
    />
  </Svg>
);
export default IconlystElectricChargingTwoTone;
