import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect7Bulk = ({
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
      <Path d="M21.2 11.25a.3.3 0 0 0 .3-.3V7.8c0-3.17-2.25-5.3-5.6-5.3H8c-3.239 0-5.5 2.179-5.5 5.3v3.15a.3.3 0 0 0 .3.3zM2.8 12.75a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h8c3.239 0 5.5-2.179 5.5-5.3v-3.15a.3.3 0 0 0-.3-.3z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.4 6.65h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5m4.7 0h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5M16.6 17.35h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5m-8.7 0h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServersConnect7Bulk;
