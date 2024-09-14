import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen1Bulk = ({
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
      d="m20.04 7.565-6.23-4.32c-.02-.01-.05-.02-.07-.04-.53-.32-1.13-.49-1.74-.48-.61-.01-1.21.16-1.74.48-.02.02-.05.03-.07.04l-6.23 4.32c-.96.72-1.51 1.78-1.51 2.91v5.9c0 3.02 1.95 4.9 5.1 4.9h8.9c3.15 0 5.1-1.88 5.1-4.9v-5.9c0-1.13-.54-2.19-1.51-2.91"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.77 11.915-4 3.2c-.54.4-1.16.61-1.77.61s-1.22-.2-1.75-.6l-4.02-3.21a.76.76 0 0 1-.11-1.06c.25-.32.73-.37 1.05-.12l4 3.2c.51.39 1.15.39 1.68-.01l3.98-3.19c.33-.25.8-.2 1.06.12s.2.8-.12 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailOpen1Bulk;
