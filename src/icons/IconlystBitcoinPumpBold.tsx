import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinPumpBold = ({
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
      d="M11.028 11.148a.6.6 0 0 0 .155-.473c-.028-.3-.318-.54-.66-.54H9.383v1.21h1.2c.172 0 .33-.07.446-.197M10.582 8.636c.172 0 .33-.07.446-.197a.62.62 0 0 0 .156-.473c-.03-.296-.325-.54-.66-.54H9.382v1.21z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.292 12.896v-.05h-.66a.75.75 0 0 1-.75-.75v-5.42a.75.75 0 0 1 .75-.75h.66v-.05a.75.75 0 0 1 1.5 0v.075c.983.122 1.79.896 1.885 1.872a2.12 2.12 0 0 1-.496 1.566c.27.315.454.706.496 1.145a2.13 2.13 0 0 1-.54 1.625 2.1 2.1 0 0 1-1.346.664v.073a.75.75 0 0 1-1.5 0m3.447 1.89 2.003.602c.261.079.513-.222.455-.488-.269-1.23.439-2.575 1.732-2.95.653-.189 1.935-.525 2.44-.657a.3.3 0 0 0 .226-.274 4 4 0 0 0 .009-.226 8.365 8.365 0 1 0-16.73 0c0 3.462 2.107 6.426 5.105 7.697a.29.29 0 0 0 .363-.118l1.553-2.506a2.5 2.5 0 0 1 2.844-1.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.097 15.664-.609-2.122c-.125-.375-.547-.64-.928-.532l-.007.001-2.137.62a.75.75 0 1 0 .418 1.44l.361-.105-1.6 2.805-4.359-1.308a.75.75 0 0 0-.854.323l-2.254 3.64a.75.75 0 0 0 1.276.79l1.951-3.15 4.38 1.313a.75.75 0 0 0 .866-.346l1.931-3.384.124.43a.75.75 0 1 0 1.441-.415"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinPumpBold;
