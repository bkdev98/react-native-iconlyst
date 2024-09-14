import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDashScanOutline = ({
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
      d="M19.583 12.41a.75.75 0 0 1-.75-.75V8.775c.001-.316-.121-.62-.34-.846l-3.65-3.8a1.23 1.23 0 0 0-.883-.377H8.51a2.873 2.873 0 0 0-2.86 2.787v5.121a.75.75 0 1 1-1.5 0V6.521A4.384 4.384 0 0 1 8.506 2.25h5.454a2.73 2.73 0 0 1 1.965.839l3.65 3.8a2.7 2.7 0 0 1 .758 1.886v2.885a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M19.519 9.058h-2.637a3.22 3.22 0 0 1-3.208-3.215V3.059a.75.75 0 1 1 1.5 0v2.784a1.715 1.715 0 0 0 1.71 1.715h2.635a.75.75 0 1 1 0 1.5M20.635 12.41H3.865a.75.75 0 0 1 0-1.5h16.77a.75.75 0 0 1 0 1.5M10.33 19.963a.75.75 0 0 1-.75-.75v-4.4a.75.75 0 0 1 1.5 0v4.4a.75.75 0 0 1-.75.75M17.973 19.029a.75.75 0 0 1-.75-.75v-3.466a.75.75 0 1 1 1.5 0v3.466a.75.75 0 0 1-.75.75M14.15 21.75a.75.75 0 0 1-.75-.75v-6.187a.75.75 0 1 1 1.5 0V21a.75.75 0 0 1-.75.75M6.51 17.814a.75.75 0 0 1-.75-.75v-2.251a.75.75 0 1 1 1.5 0v2.25a.75.75 0 0 1-.75.75M6.51 21.748a.75.75 0 0 1-.75-.75v-1.275a.75.75 0 1 1 1.5 0V21a.75.75 0 0 1-.75.748"
    />
  </Svg>
);
export default IconlystDocumentDashScanOutline;
