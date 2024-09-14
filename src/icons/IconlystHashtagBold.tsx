import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHashtagBold = ({
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
      d="m10.048 13.626.406-3.25h3.5l-.407 3.25zm8.077 0h-2.562l.406-3.25h2.156a1 1 0 1 0 0-2h-1.906l.406-3.251a1 1 0 0 0-.868-1.116.994.994 0 0 0-1.116.868l-.437 3.499h-3.5l.407-3.251a1 1 0 0 0-1.985-.248l-.437 3.499H5.875a1 1 0 0 0 0 2h2.564l-.406 3.25H5.875a1 1 0 0 0 0 2h1.908l-.407 3.25a1 1 0 0 0 1.985.248l.437-3.498h3.499l-.406 3.25a1 1 0 1 0 1.984.248l.438-3.498h2.812a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHashtagBold;
