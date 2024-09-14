import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletClockLight = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.03 16.297a4.016 4.016 0 1 1-8.032 0 4.016 4.016 0 0 1 8.032 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.262 17.34-1.27-.76v-1.63M20.998 14.406h-3.807a2.53 2.53 0 0 1 0-5.062h3.807M16.997 11.819h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h8.128A4.935 4.935 0 0 1 21 8.622v6.75a4.935 4.935 0 0 1-4.936 4.936h-2.486"
    />
  </Svg>
);
export default IconlystWalletClockLight;
