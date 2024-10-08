import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="translate(2.5 1.5)"
    >
      <Path d="m18.307 6.124-.623-1.08a1.913 1.913 0 0 0-2.608-.705h0a1.904 1.904 0 0 1-2.61-.678 1.83 1.83 0 0 1-.255-.915h0A1.913 1.913 0 0 0 10.297.778H9.043A1.904 1.904 0 0 0 7.14 2.691h0a1.913 1.913 0 0 1-1.913 1.886 1.83 1.83 0 0 1-.916-.257h0a1.913 1.913 0 0 0-2.608.705l-.669 1.099a1.913 1.913 0 0 0 .696 2.608h0a1.913 1.913 0 0 1 0 3.314h0a1.904 1.904 0 0 0-.696 2.6h0l.632 1.089a1.913 1.913 0 0 0 2.609.741h0a1.895 1.895 0 0 1 2.6.696c.164.277.252.593.255.915h0c0 1.057.857 1.913 1.913 1.913h1.254c1.053 0 1.908-.85 1.914-1.904h0a1.904 1.904 0 0 1 1.913-1.913c.321.009.636.097.915.256h0a1.913 1.913 0 0 0 2.609-.695h0l.659-1.099a1.904 1.904 0 0 0-.696-2.608h0a1.904 1.904 0 0 1-.696-2.61c.166-.289.406-.529.696-.695h0a1.913 1.913 0 0 0 .696-2.6h0z" />
      <Circle cx={9.675} cy={10.389} r={2.636} />
    </G>
  </Svg>
);
export default IconlystSettingLight;
