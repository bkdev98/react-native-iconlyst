import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationCloseBold = ({
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
      d="M18.103 12.398a6.75 6.75 0 0 1-2.553 3.673.751.751 0 0 1-.869-1.223 5.23 5.23 0 0 0 1.975-2.845c.231-.846.165-1.611-.181-2.101-.34-.481-1.024-.724-1.591-.569a1.41 1.41 0 0 0-.984.991 1.54 1.54 0 0 0 .311 1.467c.277.311.69.509 1.104.53a.75.75 0 0 1 .712.786c-.02.413-.385.747-.786.712a3.1 3.1 0 0 1-2.151-1.031 3.03 3.03 0 0 1-.629-2.889 2.92 2.92 0 0 1 2.025-2.012c1.181-.328 2.505.147 3.214 1.15.83 1.173.608 2.609.403 3.361m-6.625 0a6.74 6.74 0 0 1-2.553 3.673.751.751 0 0 1-.869-1.223 5.23 5.23 0 0 0 1.975-2.845c.231-.846.165-1.611-.181-2.101-.339-.481-1.022-.722-1.591-.569-.478.131-.837.493-.983.99a1.54 1.54 0 0 0 .311 1.468c.277.311.69.509 1.104.53a.75.75 0 0 1 .712.786c-.021.413-.387.747-.786.712a3.1 3.1 0 0 1-2.151-1.031 3.03 3.03 0 0 1-.63-2.89 2.92 2.92 0 0 1 2.025-2.011 3.015 3.015 0 0 1 3.215 1.15c.829 1.173.607 2.609.402 3.361M16.217 2.5H7.784C4.624 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.124 5.531 5.283 5.531h8.434c3.16 0 5.283-2.223 5.283-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuotationCloseBold;
