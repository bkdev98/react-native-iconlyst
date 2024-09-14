import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordReloadBold = ({
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
      d="M11.896 11.334a1.011 1.011 0 0 1 0-2.02c.556 0 1.01.454 1.01 1.01 0 .557-.453 1.01-1.01 1.01m-3.905 0a1.01 1.01 0 0 1-1.011-1.01c0-.556.454-1.01 1.01-1.01.558 0 1.012.454 1.012 1.01 0 .557-.454 1.01-1.011 1.01m7.81-2.02a1.011 1.011 0 1 1-1.011 1.01c0-.556.455-1.01 1.012-1.01m2.141 3.22c.582 0 1.142.103 1.671.282.09.03.19.018.273-.028a1.97 1.97 0 0 1 1.12-.247c.193.018.38-.115.384-.309.028-1.284.005-2.573.005-3.858 0-3.308-2.122-5.53-5.282-5.53H7.678c-3.16 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h4.712c.17 0 .305-.142.31-.312.067-2.783 2.422-5.108 5.243-5.108"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.302 16.333c0 .414.336.75.75.75h1.803c.19 0 .415-.102.547-.245a.77.77 0 0 0 .203-.505v-1.8a.75.75 0 0 0-.75-.75.74.74 0 0 0-.73.65 4 4 0 0 0-2.182-.65 4.014 4.014 0 0 0-4.008 4.01 4.014 4.014 0 0 0 4.008 4.01 3.98 3.98 0 0 0 3.429-1.93.75.75 0 1 0-1.282-.778 2.5 2.5 0 0 1-2.147 1.208 2.51 2.51 0 0 1-2.508-2.51 2.51 2.51 0 0 1 2.508-2.51c.414 0 .802.117 1.153.3h-.044a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordReloadBold;
