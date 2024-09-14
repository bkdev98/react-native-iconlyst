import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSquareBulk = ({
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
      d="M7.782 21.5h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.417 16.752.04-.028c.017-.015 1.915-1.439 3.94-1.123a.751.751 0 0 0 .865-.741V7.93a.75.75 0 0 0-.632-.74c-2.013-.329-3.815.588-4.63 1.094-.818-.505-2.617-1.415-4.633-1.095a.75.75 0 0 0-.632.74v6.931a.752.752 0 0 0 .865.741c2.017-.312 3.889 1.083 3.941 1.123h.001l.002.002a.75.75 0 0 0 .873.026m-1.168-1.94c-.764-.372-1.829-.75-3.014-.757V8.622c1.315.006 2.488.634 3.014.964zm1.5 0V9.587c.526-.33 1.698-.959 3.012-.965v5.433c-1.184.008-2.248.385-3.012.757"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookSquareBulk;
