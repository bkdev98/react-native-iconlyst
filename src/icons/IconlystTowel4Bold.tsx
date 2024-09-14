import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel4Bold = ({
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
      d="M18.38 7.925c-.27.06-.49.25-.56.53-.24.88-.24 1.77 0 2.65.08.28.3.48.56.52.05.02.1.03.16.03s.13 0 .2-.02c.4-.11.63-.52.52-.92-.17-.63-.17-1.24 0-1.87.11-.4-.12-.81-.52-.92a.7.7 0 0 0-.36 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.25 19.455c-.32-.14-.71-.26-1.27-.26-.9 0-1.39.29-1.78.52-.31.19-.51.31-1 .31s-.7-.12-1.01-.31c-.39-.23-.87-.52-1.77-.52s-1.39.29-1.78.52c-.31.19-.52.31-1.01.31-.48 0-.69-.12-1-.3-.39-.24-.87-.53-1.78-.53-.58 0-.99.13-1.31.27v-2.41h11.84c.74 0 1.37-.42 1.87-1.11zm-1.87-3.9c-.63 0-1.86-2.04-1.86-5.79 0-3.74 1.23-5.79 1.86-5.79.64 0 1.87 2.05 1.87 5.79 0 3.75-1.23 5.79-1.87 5.79m3.36-5.46c.01-.11.01-.22.01-.33 0-3.62-1.16-7.29-3.37-7.29H5.61c-2.2 0-3.36 3.67-3.36 7.29 0 3.3.96 6.63 2.79 7.21v3.71c0 .24.11.46.3.61.19.14.44.18.66.11.36-.1.62-.26.84-.39.31-.19.52-.32 1.01-.32s.7.13 1.01.31c.39.23.87.52 1.77.52.91 0 1.39-.29 1.78-.52.31-.18.52-.31 1.01-.31.48 0 .69.13 1 .31.39.23.87.52 1.78.52.9 0 1.38-.29 1.77-.52.31-.18.52-.31 1.01-.31.48 0 .69.13 1 .32.22.12.46.27.79.38.22.07.48.03.67-.11s.31-.37.31-.61v-10.51c0-.01 0-.03-.01-.04q.015-.015 0-.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowel4Bold;
