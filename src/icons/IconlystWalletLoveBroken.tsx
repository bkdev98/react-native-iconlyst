import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLoveBroken = ({
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
      d="M21.249 14.407H17.44a2.53 2.53 0 0 1 0-5.062h3.808M17.247 11.82h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 10.673V8.625A4.936 4.936 0 0 1 8.186 3.69h8.128a4.936 4.936 0 0 1 4.936 4.936v6.75a4.936 4.936 0 0 1-4.936 4.936h-3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.667 20.255a12.8 12.8 0 0 1-2.222-1.73 4.4 4.4 0 0 1-1.058-1.685c-.396-1.236.066-2.65 1.364-3.068a2.21 2.21 0 0 1 2.005.337 2.21 2.21 0 0 1 2-.337c1.298.419 1.763 1.832 1.368 3.068a4.4 4.4 0 0 1-1.057 1.686 13 13 0 0 1-2.223 1.73l-.086.053z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletLoveBroken;
