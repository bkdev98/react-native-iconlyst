import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletClockBroken = ({
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
      d="M11.28 16.297a4.016 4.016 0 1 1-8.032 0 4.016 4.016 0 0 1 8.032 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.512 17.34-1.27-.76v-1.63M21.249 14.405H17.44a2.531 2.531 0 0 1 0-5.062h3.808M17.247 11.817h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h8.128a4.935 4.935 0 0 1 4.936 4.934v6.75a4.935 4.935 0 0 1-4.936 4.936h-2.486"
    />
  </Svg>
);
export default IconlystWalletClockBroken;
