import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletIncomeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.248 14.407H17.44a2.532 2.532 0 0 1 0-5.062h3.807M17.247 11.82h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 11.613V8.625A4.936 4.936 0 0 1 8.186 3.69h8.128a4.936 4.936 0 0 1 4.936 4.936v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426M7.916 15.643 3.25 20.309"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.91 19.4.007-3.757-3.757.007"
    />
  </Svg>
);
export default IconlystWalletIncomeBroken;
