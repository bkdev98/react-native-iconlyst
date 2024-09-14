import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThetaNetworkBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.717 2.505H8.282C5.123 2.505 3 4.727 3 8.035v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.443 18.432c1.394 0 2.504-.999 2.644-2.45V8.123a2.553 2.553 0 0 0-2.55-2.55h-4.073c-1.454 0-2.55 1.096-2.55 2.55v7.76a2.55 2.55 0 0 0 2.55 2.55zm-.521-8.6h-.67v-1.15a.75.75 0 0 0-1.5 0v1.15h-.672a.75.75 0 0 0 0 1.5h2.842a.75.75 0 0 0 0-1.5m-2.842 2.84h2.842a.75.75 0 0 1 0 1.5h-.67v1.15a.75.75 0 0 1-1.5 0v-1.15h-.672a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThetaNetworkBulk;
