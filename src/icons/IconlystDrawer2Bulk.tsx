import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawer2Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.849 11.25a.3.3 0 0 0 .3-.3V8.03c0-3.308-2.123-5.53-5.283-5.53H8.133c-3.159 0-5.282 2.222-5.282 5.53v2.92a.3.3 0 0 0 .3.3zM3.151 12.75a.3.3 0 0 0-.3.3v2.92c0 3.307 2.123 5.53 5.282 5.53h7.732c3.16 0 5.284-2.222 5.284-5.53v-2.92a.3.3 0 0 0-.3-.3z" />
    </G>
    <Path
      fill={props.color}
      d="M13.958 7.03h-3.913a.75.75 0 0 0 0 1.5h3.913a.75.75 0 0 0 0-1.5M10.045 16.969h3.913a.75.75 0 0 0 0-1.5h-3.913a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystDrawer2Bulk;