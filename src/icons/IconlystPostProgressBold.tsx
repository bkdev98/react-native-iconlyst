import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostProgressBold = ({
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
      d="M18.86 18.055H17.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.16c.41 0 .75.34.75.75s-.34.75-.75.75m-5.42 0h-1.15a.749.749 0 1 1 0-1.5h1.15a.749.749 0 1 1 0 1.5m-5.41 0H6.87c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.16c.41 0 .75.34.75.75s-.34.75-.75.75m11.92-4.15H5.75c-1.88 0-3.4 1.53-3.4 3.4s1.52 3.4 3.4 3.4h14.2c1.88 0 3.4-1.53 3.4-3.4s-1.52-3.4-3.4-3.4M11.61 6.735l-.01-3.23c0-.11.09-.2.2-.2h2.08c.11 0 .2.09.2.2l.01 3.22-1-.32a.76.76 0 0 0-.47 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.67 5.855-.02 6.29c0 .27-.22.49-.5.49H6.53c-.14 0-.26-.05-.36-.14a.52.52 0 0 1-.14-.36l.01-6.32a2.537 2.537 0 0 1 2.53-2.52H9.9c.11 0 .2.09.2.2l.01 4.28a.74.74 0 0 0 .75.75c.08 0 .16-.01.23-.04l1.77-.58 1.75.57c.23.08.48.04.68-.1.19-.15.31-.37.31-.61l-.02-4.25c0-.11.09-.2.2-.2h1.37a2.525 2.525 0 0 1 2.52 2.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPostProgressBold;
