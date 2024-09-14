import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalyticsBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.11 16.233a2.614 2.614 0 0 0-2.61 2.61 2.614 2.614 0 0 0 2.61 2.61 2.614 2.614 0 0 0 2.613-2.61 2.614 2.614 0 0 0-2.612-2.61M18.89 3.563a2.614 2.614 0 0 0-2.613 2.61v12.67a2.614 2.614 0 0 0 2.612 2.61 2.614 2.614 0 0 0 2.611-2.61V6.173a2.614 2.614 0 0 0-2.61-2.61M11.81 9.703a2.614 2.614 0 0 0-2.613 2.61v6.53a2.614 2.614 0 0 0 2.612 2.61 2.614 2.614 0 0 0 2.611-2.61v-6.53a2.614 2.614 0 0 0-2.61-2.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAnalyticsBold;
