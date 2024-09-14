import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLockBroken = ({
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
      d="M21.251 15.54v1.576a3.893 3.893 0 0 1-3.893 3.892H16.07M3.249 15.54v1.576a3.893 3.893 0 0 0 3.893 3.892h1.257M3.249 8.477V6.9a3.893 3.893 0 0 1 3.893-3.892h1.289M21.25 8.477V6.9a3.893 3.893 0 0 0-3.892-3.892H16.1M13.7 12.39a2.44 2.44 0 0 0 1.003-1.968 2.453 2.453 0 0 0-4.907 0c0 .81.397 1.522 1.002 1.969l-.76 2.285a1.04 1.04 0 0 0 .988 1.368h2.448c.709 0 1.21-.694.987-1.368"
    />
  </Svg>
);
export default IconlystScanLockBroken;
