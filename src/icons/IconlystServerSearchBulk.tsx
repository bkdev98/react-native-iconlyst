import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSearchBulk = ({
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
      <Path d="M15.517 2.254h-7.9c-3.24 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3v-3.15c0-3.17-2.25-5.3-5.6-5.3M13.802 13.12c.216-.203.08-.616-.216-.616H2.416a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h5.065c.255 0 .4-.304.257-.516a5.9 5.9 0 0 1-1.001-3.294c0-1.703.718-3.243 1.865-4.324" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 7.904h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M7.517 17.104h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M20.603 21.526c.146.146.338.22.53.22a.749.749 0 0 0 .53-1.28l-1.055-1.056a3.63 3.63 0 0 0 .675-2.114 3.654 3.654 0 0 0-3.65-3.65 3.654 3.654 0 0 0-3.65 3.65 3.654 3.654 0 0 0 3.65 3.65c.684 0 1.324-.19 1.872-.518zm-5.12-4.23c0-1.186.964-2.15 2.15-2.15s2.15.963 2.15 2.15c0 1.185-.964 2.15-2.15 2.15a2.15 2.15 0 0 1-2.15-2.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerSearchBulk;
