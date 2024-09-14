import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterDownloadBulk = ({
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
      fillRule="evenodd"
      d="M19.229 3.498h-2.45c-.165 0-.307.138-.256.296.067.208.214.388.454.628.98.974.982 2.557.008 3.535L14.753 10.2a2.498 2.498 0 0 1-1.658.734h-.003l-.112.002a2.5 2.5 0 0 1-1.814-.778l-2.19-2.2a2.5 2.5 0 0 1 .008-3.536c.24-.24.386-.42.453-.628.05-.158-.092-.296-.258-.296H6.731a3.254 3.254 0 0 0-3.25 3.251v2.102c0 1.165.453 2.261 1.298 3.107l4.454 3.964c.201.201.316.479.316.763v3.305a2.074 2.074 0 0 0 2.078 2.077c.26 0 .52-.048.768-.148l1.93-.768a2.06 2.06 0 0 0 1.309-1.93v-2.038c0-.305.13-.597.372-.817l5.032-4.976a4.37 4.37 0 0 0 1.442-3.242V6.749A3.255 3.255 0 0 0 19.23 3.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.217 6.723 2.209 2.219a.75.75 0 0 0 1.086.024l2.233-2.243a.75.75 0 1 0-1.062-1.06l-.953.958V2.684a.75.75 0 0 0-1.5 0v3.935l-.951-.955a.749.749 0 1 0-1.062 1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterDownloadBulk;
