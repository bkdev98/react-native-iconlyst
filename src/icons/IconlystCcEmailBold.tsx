import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCcEmailBold = ({
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
      d="M3.066 4.306c1.025-1.099 2.49-1.724 4.248-1.724h9.371c1.762 0 3.228.625 4.252 1.725 1.02 1.095 1.563 2.62 1.563 4.36v6.668c0 1.74-.543 3.265-1.563 4.36-1.024 1.1-2.49 1.725-4.253 1.725h-9.37c-1.762 0-3.228-.625-4.252-1.725-1.02-1.095-1.562-2.62-1.562-4.36V8.667c0-1.74.546-3.266 1.566-4.36m15.392 5.139a3.618 3.618 0 0 0-5.115 5.114 3.62 3.62 0 0 0 5.115 0 .75.75 0 0 0-1.06-1.06 2.118 2.118 0 0 1-2.994-2.994 2.12 2.12 0 0 1 2.994 0 .75.75 0 1 0 1.06-1.06m-11.013 1.06a2.105 2.105 0 0 1 2.765-.19.75.75 0 1 0 .907-1.194 3.605 3.605 0 0 0-4.735.327 3.61 3.61 0 0 0 0 5.114c1.286 1.286 3.315 1.391 4.731.33a.75.75 0 1 0-.9-1.2 2.13 2.13 0 0 1-2.77-.19 2.11 2.11 0 0 1-.003-2.991z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCcEmailBold;
