import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookWifiNetworkTwoTone = ({
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
      d="M3.5 16.917v.507a2.43 2.43 0 0 0 2.429 2.428h13.143a2.43 2.43 0 0 0 2.428-2.428v-.507a.55.55 0 0 0-.55-.55H4.05a.55.55 0 0 0-.55.55"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.834 4.146a3.375 3.375 0 0 1 3.375 3.376M16.709 6.959c.932 0 1.687.756 1.687 1.687"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.658 5.148H7.84a3.01 3.01 0 0 0-3.01 3.012v8.207M20.17 16.366V12.66"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMacLaptopNotebookWifiNetworkTwoTone;
