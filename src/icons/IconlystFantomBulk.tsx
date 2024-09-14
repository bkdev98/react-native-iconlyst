import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFantomBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path
        fillRule="evenodd"
        d="m8.705 6.086 3.463 1.995a.66.66 0 0 0 .672-.003l3.454-1.993.469.27c.21.123.34.347.34.59v.982L14.879 9.21l2.212 1.277v3.696l-3.25 1.877a2.7 2.7 0 0 1-.777.3h-1.128a2.7 2.7 0 0 1-.777-.3l-3.247-1.875v-3.7l2.21-1.275-2.225-1.28v-.985c0-.243.13-.468.34-.59zm7.587 6.25-2.791 1.61v-3.222zm-7.583 0 2.792-1.613v3.224z"
        clipRule="evenodd"
      />
      <Path d="M21.653 5.816a1 1 0 1 0-2 0v2.13a1 1 0 1 0 2 0zM5.347 15.125a1 1 0 1 0-2 0v2.129a1 1 0 1 0 2 0z" />
    </G>
    <Path fill={props.color} d="M13.064 16.36c-.372.08-.757.08-1.128 0z" />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.16 2.359a2.68 2.68 0 0 1 2.68 0l3.923 2.265a2.68 2.68 0 0 1 1.34 2.321v10.11c0 .957-.51 1.842-1.34 2.32L13.84 21.64c-.83.48-1.851.48-2.68 0l-3.923-2.264a2.68 2.68 0 0 1-1.34-2.321V6.945c0-.957.511-1.842 1.34-2.32zm5.943 4.586v10.11a.68.68 0 0 1-.34.588L12.84 19.91a.68.68 0 0 1-.68 0l-3.923-2.266a.68.68 0 0 1-.34-.588V6.945c0-.243.13-.468.341-.59l3.922-2.264a.68.68 0 0 1 .681 0l3.922 2.264c.21.123.34.347.34.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFantomBulk;
