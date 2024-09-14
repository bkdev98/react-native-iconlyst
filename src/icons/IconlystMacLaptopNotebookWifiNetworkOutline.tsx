import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookWifiNetworkOutline = ({
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
      d="M2.5 16.917a1.3 1.3 0 0 1 1.3-1.3h16.9a1.3 1.3 0 0 1 1.3 1.3v.507a3.18 3.18 0 0 1-3.178 3.178H5.679A3.18 3.18 0 0 1 2.5 17.424zm1.5.2v.307a1.68 1.68 0 0 0 1.679 1.678h13.143a1.68 1.68 0 0 0 1.678-1.678v-.307zM16.834 4.146a.75.75 0 0 1 .75-.75 4.125 4.125 0 0 1 4.125 4.126.75.75 0 0 1-1.5 0 2.625 2.625 0 0 0-2.625-2.626.75.75 0 0 1-.75-.75M15.709 6.959a.75.75 0 0 1 .75-.75 2.437 2.437 0 0 1 2.437 2.437.75.75 0 0 1-1.5 0 .937.937 0 0 0-.937-.937.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.83 8.16a3.76 3.76 0 0 1 3.761-3.762h4.817a.75.75 0 1 1 0 1.5H7.59a2.26 2.26 0 0 0-2.26 2.262v8.207a.75.75 0 0 1-1.5 0zM19.92 11.91a.75.75 0 0 1 .75.75v3.706a.75.75 0 0 1-1.5 0V12.66a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookWifiNetworkOutline;
