import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerEmojiBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.34 9.615a1.01 1.01 0 0 1-1.01-1.01c0-.557.454-1.011 1.01-1.011.558 0 1.012.454 1.012 1.011s-.454 1.01-1.011 1.01m-2.25 6.509a4.3 4.3 0 0 1-1.454.255c-1.377 0-2.676-.664-3.564-1.822a.75.75 0 0 1 .14-1.05.747.747 0 0 1 1.05.138c.816 1.063 2.162 1.487 3.32 1.069a.75.75 0 0 1 .508 1.41m-4.396-8.53a1.011 1.011 0 1 1-.002 2.02 1.011 1.011 0 0 1 .002-2.02m7.9-5.344H7.653c-2.924 0-5.308 2.397-5.308 5.35v9.027c0 2.817 2.272 5.123 5.072 5.123h6.006a.52.52 0 0 0 .518-.523v-3.658c0-2.078 1.699-3.782 3.757-3.794h3.453a.506.506 0 0 0 .506-.511V7.35c0-2.817-2.261-5.1-5.061-5.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.644 15.427c-.924-.003-2.014 0-2.798.008-1.244 0-2.269 1.035-2.269 2.29v2.995c0 .49.588.733.925.38l2.278-2.393 2.25-2.363a.542.542 0 0 0-.386-.917"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerEmojiBold;
