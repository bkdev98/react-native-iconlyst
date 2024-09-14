import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHouseLockBold = ({
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
      d="M13.449 13.118h-2.895a.69.69 0 0 0-.687.69v1.62c0 .38.308.69.687.69h2.895a.69.69 0 0 0 .687-.69v-1.62a.69.69 0 0 0-.687-.69M12.98 11.617v-.25c-.007-.53-.47-.957-.992-.96a.984.984 0 0 0-.965.963v.247z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.635 15.428a2.19 2.19 0 0 1-2.187 2.19h-2.895a2.19 2.19 0 0 1-2.187-2.19v-1.62c0-.832.472-1.548 1.156-1.92v-.53a2.486 2.486 0 0 1 2.441-2.451h.026a2.49 2.49 0 0 1 2.49 2.452v.53a2.18 2.18 0 0 1 1.156 1.919zm4.126-7.607-5.573-4.54a3.47 3.47 0 0 0-4.376 0L4.24 7.82a3.43 3.43 0 0 0-1.278 2.678v7.18a3.826 3.826 0 0 0 3.822 3.82h10.431a3.825 3.825 0 0 0 3.822-3.82v-7.18a3.43 3.43 0 0 0-1.276-2.677"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHouseLockBold;
