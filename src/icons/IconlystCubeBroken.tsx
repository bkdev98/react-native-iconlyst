import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.627 21h3.608c.81 0 1.587-.322 2.16-.895l3.21-3.21c.573-.573.895-1.35.895-2.16v-9.68C21.5 3.92 20.58 3 19.445 3h-9.68c-.81 0-1.587.322-2.16.895l-3.21 3.21a3.06 3.06 0 0 0-.895 2.16v9.68C3.5 20.08 4.42 21 5.555 21h2.42M8.501 14.997h12.99M8.501 14.997l-4.4 5.4M8.5 14.998V6.2M3.56 8.688h12.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.29 17.528V9.087c0-.26.09-.51.27-.71l4.32-4.79"
    />
  </Svg>
);
export default IconlystCubeBroken;
