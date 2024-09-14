import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRackBold = ({
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
      d="M7.6 18.25h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75M5.4 13.6c-1.71 0-2.9 1.15-2.9 2.8v2.2c0 1.65 1.19 2.8 2.9 2.8h9.85a.3.3 0 0 0 .3-.3v-7.2a.3.3 0 0 0-.3-.3zm13.1 0h-1.15a.3.3 0 0 0-.3.3v7.2a.3.3 0 0 0 .3.3h1.25c1.71 0 2.9-1.15 2.9-2.8v-2.2c0-1.67-1.21-2.8-3-2.8M7.6 7.25h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75M5.4 2.6c-1.71 0-2.9 1.15-2.9 2.8v2.2c0 1.65 1.19 2.8 2.9 2.8h9.85a.3.3 0 0 0 .3-.3V2.9a.3.3 0 0 0-.3-.3zm13.1 0h-1.15a.3.3 0 0 0-.3.3v7.2a.3.3 0 0 0 .3.3h1.25c1.71 0 2.9-1.15 2.9-2.8V5.4c0-1.67-1.21-2.8-3-2.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRackBold;
