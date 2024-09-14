import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat1Broken = ({
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
      d="m6.307 14.78.254 3.764a2.11 2.11 0 0 0 2.106 1.967h6.668c1.11 0 2.03-.86 2.105-1.967l.255-3.763h-.002A4.63 4.63 0 0 0 21 10.337a4.636 4.636 0 0 0-4.635-4.636c-.193 0-.376.017-.568.042a4.33 4.33 0 0 0-3.8-2.255c-1.638 0-3.05.91-3.801 2.255a4 4 0 0 0-.56-.042A4.636 4.636 0 0 0 3 10.337c0 1.086.37 2.082.993 2.871M6.479 17.32h8.243"
    />
  </Svg>
);
export default IconlystKitchenHat1Broken;
