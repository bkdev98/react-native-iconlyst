import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookWifiNetworkBroken = ({
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
      d="M11.936 19.852H5.93A2.43 2.43 0 0 1 3.5 17.424v-.507a.55.55 0 0 1 .55-.55h16.9a.55.55 0 0 1 .55.55v.507a2.43 2.43 0 0 1-2.428 2.428h-3.286M17.834 4.146a3.375 3.375 0 0 1 3.375 3.376M16.709 6.959c.932 0 1.687.756 1.687 1.687M12.658 5.148H7.84a3.01 3.01 0 0 0-3.01 3.012M4.83 11.29v5.076M20.17 16.366V12.66"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookWifiNetworkBroken;
