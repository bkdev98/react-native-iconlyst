import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumBatteryTwoTone = ({
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
      d="M14.934 17.742H7.616c-2.547 0-4.124-1.42-4.116-4.03v-3.416c0-2.61 1.577-4.038 4.123-4.038h7.311c2.539 0 4.124 1.452 4.124 4.104v3.35c0 2.61-1.585 4.03-4.124 4.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.365 10.177v3.646M11.225 10.177v3.646M18.906 9.064h.8c1.3 0 1.794.743 1.794 2.1v1.708c0 1.333-.493 2.06-1.794 2.06h-.792"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMediumBatteryTwoTone;
