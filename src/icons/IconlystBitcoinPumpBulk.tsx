import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinPumpBulk = ({
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
      d="m13.239 14.787 2.003.602c.261.078.513-.223.455-.489-.269-1.23.439-2.574 1.732-2.949.653-.19 1.935-.526 2.44-.658a.3.3 0 0 0 .226-.274q.008-.112.009-.226a8.365 8.365 0 1 0-16.73 0c0 3.463 2.107 6.426 5.105 7.697a.29.29 0 0 0 .363-.118l1.553-2.506a2.5 2.5 0 0 1 2.844-1.079"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.792 12.845v.05a.75.75 0 0 0 1.5 0v-.073a2.1 2.1 0 0 0 1.345-.664 2.13 2.13 0 0 0 .54-1.625 2.05 2.05 0 0 0-.496-1.145c.365-.431.549-.995.496-1.566-.095-.976-.901-1.75-1.885-1.872v-.075a.75.75 0 0 0-1.5 0v.05h-.66a.75.75 0 0 0-.75.75v5.42c0 .414.336.75.75.75zm1.29-4.21c.172 0 .33-.07.446-.197a.62.62 0 0 0 .156-.473c-.03-.296-.325-.54-.66-.54H9.882v1.21zm.6 2.04a.6.6 0 0 1-.154.472.6.6 0 0 1-.446.197h-1.2v-1.21h1.142c.34 0 .63.24.659.54M21.597 15.665l-.609-2.122c-.125-.376-.547-.64-.928-.532h-.007l-2.137.62a.75.75 0 1 0 .418 1.44l.361-.104-1.6 2.805-4.359-1.308a.75.75 0 0 0-.854.323l-2.254 3.64a.75.75 0 0 0 1.276.79l1.951-3.151 4.38 1.314a.75.75 0 0 0 .866-.346l1.931-3.384.124.429a.75.75 0 1 0 1.441-.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinPumpBulk;
