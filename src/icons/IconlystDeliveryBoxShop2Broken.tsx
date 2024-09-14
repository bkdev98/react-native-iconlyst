import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop2Broken = ({
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
      d="M21.206 16.454H9.325a1.797 1.797 0 0 1-1.796-1.649l-.48-5.723M4.493 3l2.075.36.24 2.86M17.124 3l.009 4.218-1.563-.51-1.573.52-.005-4.214"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.25 12.936c-1.627.004-2.64-1.142-2.644-2.766l-.01-4.382c-.004-1.624 1.01-2.773 2.63-2.777L17.876 3c1.627-.004 2.64 1.141 2.644 2.766l.01 4.381c.004 1.624-1.004 2.774-2.63 2.778M8.83 20.444v.119m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M20.207 20.444v.119m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop2Broken;
