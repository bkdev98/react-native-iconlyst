import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCometLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.741 3.299 1.465 1.997c.145.197.377.31.622.302l2.504-.064a.734.734 0 0 1 .619 1.17l-1.479 1.999a.73.73 0 0 0-.102.679l.827 2.327a.745.745 0 0 1-.938.947l-2.377-.76a.76.76 0 0 0-.686.117l-1.992 1.504a.744.744 0 0 1-1.198-.583l.01-2.47a.73.73 0 0 0-.322-.606L9.635 8.461a.734.734 0 0 1 .197-1.308l2.384-.768a.75.75 0 0 0 .488-.492l.722-2.37a.751.751 0 0 1 1.315-.224"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 11.404c-2.44-1.118-6.743 1.48-8.121 5.157-1.88-5.764 3.161-12.875 9.258-12.114"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.587 18.142c.977.166 1.816.791 2.254 1.68a3.09 3.09 0 0 1 1.68-2.254 3.1 3.1 0 0 1-2.254-1.68 3.1 3.1 0 0 1-1.68 2.254M6.778 18.248A4.93 4.93 0 0 1 10.315 21a4.92 4.92 0 0 1 2.752-3.536 4.93 4.93 0 0 1-3.536-2.752 4.93 4.93 0 0 1-2.753 3.536"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCometLight;
