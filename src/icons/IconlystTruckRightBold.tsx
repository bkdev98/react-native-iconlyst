import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRightBold = ({
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
      d="M18.92 16.43h-.16a2.66 2.66 0 0 0-1.81-1.8V9.15l2.35 1.04c.58.25.95.83.95 1.47H18.6a.749.749 0 1 0 0 1.5h1.65v1.94c0 .74-.59 1.33-1.33 1.33m-3.85 1.05a1 1 0 0 1-.039-.29l.001-.006-.001-.01c.001-.357.16-.665.419-.874.2-.18.47-.28.75-.28s.55.1.75.28c.26.21.42.52.42.88a1.17 1.17 0 0 1-2.3.3m-9.18-.28v-.02c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16 0 .03 0 .06-.01.09a1.15 1.15 0 0 1-1.15 1.08c-.64 0-1.16-.51-1.17-1.15m3.75-5.85.3-.3H6.82c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h3.12l-.3-.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.48 1.49c.03.02.07.05.1.09a.61.61 0 0 1 .21.39c.01.03.02.05.01.07-.002-.023 0-.045-.01-.07.01.04.01.09.01.14s0 .1-.01.15c-.03.15-.1.29-.21.39l-1.58 1.58c-.14.14-.34.21-.53.21s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06M19.9 8.82l-2.95-1.3v-.54c0-1.56-1.27-2.83-2.83-2.83H5.05c-1.54 0-2.8 1.26-2.8 2.8v8.15c0 1.35.96 2.49 2.23 2.76a2.664 2.664 0 0 0 2.58 1.99 2.654 2.654 0 0 0 2.548-1.916h4.034a2.666 2.666 0 0 0 5.118-.004h.16c1.56 0 2.83-1.27 2.83-2.83v-3.44c0-1.24-.73-2.36-1.85-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckRightBold;
