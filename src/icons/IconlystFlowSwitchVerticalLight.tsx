import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowSwitchVerticalLight = ({
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
      d="M16.235 9.882V20.47m0 0 3.177-3.176m-3.177 3.176-3.176-3.176m3.176-13.765v.01m0 3.167v.01M7.765 14.117V3.53m0 0 3.176 3.176M7.765 3.53 4.588 6.705M7.765 20.47v-.01m0-3.166v-.01"
    />
  </Svg>
);
export default IconlystFlowSwitchVerticalLight;
