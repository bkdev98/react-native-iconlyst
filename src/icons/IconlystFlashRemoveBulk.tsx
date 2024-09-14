import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashRemoveBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.555 4.133a.755.755 0 0 0-1.06-.03c-.3.29-.31.76-.03 1.07l3.94 4.15-2.13 2.92c-.32.46-.36 1.04-.11 1.54.25.49.75.79 1.3.79h4.83v5.13c0 .65.39 1.19 1.01 1.39.15.05.31.08.47.08.45 0 .88-.22 1.17-.61l1.78-2.46 3.41 3.59c.15.16.35.23.55.23.18 0 .37-.06.52-.2.3-.29.31-.76.02-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.575 10.063a1.47 1.47 0 0 0-1.28-.79l-4.46-.39-.39-4.74c0-.64-.39-1.19-1.01-1.39-.61-.2-1.26.01-1.65.54L9.87 6c-.14.2-.11.46.05.63l7.63 8.04c.1.1.23.15.36.15h.04c.15-.01.29-.09.38-.21l2.136-3.006c.32-.45.36-1.04.11-1.54"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlashRemoveBulk;
