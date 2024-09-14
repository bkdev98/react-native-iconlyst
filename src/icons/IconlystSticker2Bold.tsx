import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSticker2Bold = ({
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
      d="M14.008 9.461H7.574a.75.75 0 0 1 0-1.5h6.434a.75.75 0 0 1 0 1.5m-2.436 4.717H7.573a.75.75 0 0 1 0-1.5h3.999a.75.75 0 1 1 0 1.5M16.595 2.25H7.652c-2.924 0-5.308 2.396-5.308 5.35v9.026c0 2.818 2.272 5.124 5.072 5.124h6.006a.52.52 0 0 0 .518-.523v-3.658c0-2.079 1.699-3.782 3.757-3.794h3.453a.506.506 0 0 0 .506-.511V7.35c0-2.817-2.261-5.1-5.061-5.1"
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
export default IconlystSticker2Bold;
