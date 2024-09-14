import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignBottomBroken = ({
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
      d="M3.59 21h17.82M21.122 15.046a2.32 2.32 0 0 1-2.318 2.318h-2.066a2.32 2.32 0 0 1-2.318-2.318v-4.939a2.32 2.32 0 0 1 2.318-2.318h2.066a2.32 2.32 0 0 1 2.318 2.318v2.115M3.877 9.182V5.318A2.32 2.32 0 0 1 6.195 3h2.066a2.32 2.32 0 0 1 2.318 2.318v9.727a2.32 2.32 0 0 1-2.318 2.318H6.195a2.32 2.32 0 0 1-2.318-2.318v-2.432"
    />
  </Svg>
);
export default IconlystAlignBottomBroken;
