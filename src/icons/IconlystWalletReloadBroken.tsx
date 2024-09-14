import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletReloadBroken = ({
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
      d="M18.896 14.407h-1.454a2.532 2.532 0 0 1 0-5.062h3.807M17.247 11.815h-.003M3.25 10.673V8.625A4.936 4.936 0 0 1 8.186 3.69h3.809"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.314 3.688a4.936 4.936 0 0 1 4.936 4.935v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426M8.636 14.637a3.242 3.242 0 0 0-5.386 2.431M4.346 19.499a3.242 3.242 0 0 0 5.386-2.431"
    />
  </Svg>
);
export default IconlystWalletReloadBroken;
