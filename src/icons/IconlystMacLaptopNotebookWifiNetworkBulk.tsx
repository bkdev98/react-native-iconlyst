import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookWifiNetworkBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.344 5.355a2.63 2.63 0 0 1 2.625 2.625.75.75 0 1 0 1.5 0 4.13 4.13 0 0 0-4.125-4.125.75.75 0 0 0 0 1.5M16.219 8.168c.517 0 .937.42.937.937a.75.75 0 0 0 1.5 0 2.44 2.44 0 0 0-2.437-2.437.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.33 14.819h15.34c.28 0 .5-.22.5-.5v-4.15c-.03.08-.07.15-.11.22-.44.73-1.24 1.22-2.15 1.22-1.14 0-2.1-.76-2.4-1.79a2.505 2.505 0 0 1-1.79-2.4c0-.91.48-1.7 1.21-2.14-.06-.21-.09-.44-.09-.67q0-.45.15-.84H7.34c-2.16 0-3.51 1.12-3.51 2.91v7.64c0 .28.22.5.5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.949 16.246H3.052a.8.8 0 0 0-.802.8v.507a2.68 2.68 0 0 0 2.679 2.678h14.142a2.68 2.68 0 0 0 2.679-2.678v-.507c0-.44-.36-.8-.801-.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookWifiNetworkBulk;
