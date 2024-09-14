import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotDisconnectBold = ({
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
      d="M15.549 12.25a1 1 0 1 0 2 0 5.52 5.52 0 0 0-1.612-3.889 1 1 0 1 0-1.41 1.418 3.5 3.5 0 0 1 1.022 2.471M19.338 15.538a1 1 0 1 0 1.822.823c1.704-3.769.883-8.262-2.043-11.179a.999.999 0 1 0-1.412 1.416c2.339 2.332 2.995 5.925 1.633 8.94M3.852 2.633a.999.999 0 1 0-1.414 1.414l1.87 1.871a9.92 9.92 0 0 0-2.26 6.332 9.93 9.93 0 0 0 2.927 7.068 1 1 0 0 0 1.414-1.415 7.94 7.94 0 0 1-2.342-5.653c0-1.802.598-3.507 1.69-4.904l1.79 1.793c-1.47 2.14-1.266 5.095.632 6.997a.996.996 0 0 0 1.414.002c.391-.39.391-1.024.002-1.415-1.115-1.117-1.3-2.8-.59-4.126l10.765 10.77a1 1 0 0 0 1.414-1.414z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotspotDisconnectBold;
