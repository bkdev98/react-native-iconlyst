import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa2Broken = ({
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
      d="M12.004 14.632h3.818c.583 0 1.055-.472 1.055-1.055v-.911c0-.5 0-.75.06-.955.143-.496.53-.883 1.026-1.025.204-.059.456-.058.96-.057.518.001.778.002.983.062.5.147.886.54 1.024 1.043.056.206.052.458.044.962-.017 1.014-.043 2.102-.083 2.515a3.625 3.625 0 0 1-3.339 3.3c-.481.103-4.17.132-5.557.132s-4.715 0-5.546-.13a3.63 3.63 0 0 1-3.35-3.302c-.04-.417-.063-1.513-.076-2.529-.007-.508-.01-.762.051-.974a1.51 1.51 0 0 1 1.01-1.022c.212-.064.469-.064.983-.063.523 0 .785 0 .995.064.485.145.861.521 1.006 1.007.063.21.063.47.063.99v.893c0 .583.473 1.055 1.055 1.055h.945M8.08 18.7v1.776M16.193 18.7v1.776M5.104 10.596V8.174c0-1.342 0-2.012.21-2.544A3 3 0 0 1 7 3.945c.532-.211 1.203-.211 2.545-.211h4.978c1.342 0 2.012 0 2.544.21a3 3 0 0 1 1.685 1.686M18.962 8.174v2.422"
    />
  </Svg>
);
export default IconlystSofa2Broken;
