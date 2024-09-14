import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowOutline = ({
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
      d="M9.541 12.794a4.343 4.343 0 0 1 6.144 0 4.35 4.35 0 0 1 1.272 3.072v2.037a.75.75 0 0 1-1.5 0v-2.037c0-.754-.3-1.477-.833-2.012m-4.022 0a2.85 2.85 0 0 0-.833 2.012v2.037a.75.75 0 0 1-1.5 0v-2.037c0-1.152.458-2.257 1.272-3.072m1.061 1.06a2.843 2.843 0 0 1 4.021 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.474 10.546a7.27 7.27 0 0 1 10.282 0 7.27 7.27 0 0 1 2.129 5.141v2.217a.75.75 0 1 1-1.5 0v-2.217a5.77 5.77 0 0 0-5.77-5.77 5.77 5.77 0 0 0-5.771 5.77v2.217a.75.75 0 0 1-1.5 0v-2.217c0-1.927.766-3.778 2.13-5.14"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.366 8.348a10.251 10.251 0 0 1 17.498 7.248v2.307a.75.75 0 0 1-1.5 0v-2.307A8.75 8.75 0 0 0 6.427 9.409a8.75 8.75 0 0 0-2.563 6.187v2.307a.75.75 0 0 1-1.5 0v-2.307c0-2.718 1.08-5.326 3.002-7.247"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainbowOutline;
