import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRightBulk = ({
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
      d="M20.25 11.664h-1.651a.75.75 0 0 0 0 1.5h1.651V15.1c0 .74-.59 1.33-1.33 1.33h-.16l-.002-.008-.002.005a2.67 2.67 0 0 1 0 1.511l.001.002.003-.01h.16c1.56 0 2.83-1.27 2.83-2.83v-3.44c0-1.24-.73-2.36-1.85-2.84l-2.95-1.3v-.54c0-1.56-1.27-2.83-2.83-2.83H5.05c-1.54 0-2.8 1.26-2.8 2.8v8.15a2.83 2.83 0 0 0 2.223 2.759 2.67 2.67 0 0 1 2.58-3.343 2.667 2.667 0 0 1 2.559 3.418h4.027a2.667 2.667 0 0 1 3.311-3.311V9.16l2.34 1.03c.59.25.96.83.96 1.47z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.052 14.516a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m-1.166 2.666a1.167 1.167 0 1 1 2.333 0 1.167 1.167 0 0 1-2.333 0M16.198 14.516a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m-1.167 2.666a1.167 1.167 0 1 1 2.334 0 1.167 1.167 0 0 1-2.334 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m9.64 11.35.3-.3H6.82c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h3.12l-.3-.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.48 1.49c.03.02.07.05.1.09a.61.61 0 0 1 .213.4c.009.025.016.042.007.06-.002-.02 0-.039-.007-.06l-.003-.01c.01.04.01.09.01.14s0 .1-.01.15c-.03.15-.1.29-.21.39l-1.58 1.58c-.14.14-.34.21-.53.21s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06"
    />
  </Svg>
);
export default IconlystTruckRightBulk;
