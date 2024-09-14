import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalyticsBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M5.111 15.725A2.614 2.614 0 0 0 2.5 18.334a2.614 2.614 0 0 0 2.611 2.61 2.614 2.614 0 0 0 2.612-2.61 2.614 2.614 0 0 0-2.612-2.61M18.89 3.055a2.614 2.614 0 0 0-2.613 2.609v12.67a2.614 2.614 0 0 0 2.612 2.61 2.614 2.614 0 0 0 2.611-2.61V5.664a2.614 2.614 0 0 0-2.61-2.61" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.81 9.195a2.614 2.614 0 0 0-2.613 2.61v6.53a2.614 2.614 0 0 0 2.612 2.61 2.614 2.614 0 0 0 2.611-2.61v-6.53a2.614 2.614 0 0 0-2.61-2.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAnalyticsBulk;
