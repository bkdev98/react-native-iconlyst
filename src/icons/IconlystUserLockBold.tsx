import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLockBold = ({
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
      d="M10.604 2.656c-2.606 0-4.718 2.144-4.718 4.786 0 2.644 2.112 4.786 4.718 4.786s4.718-2.142 4.718-4.786c0-2.642-2.112-4.786-4.718-4.786"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.803 15.646v-.322a2.556 2.556 0 0 1 2.531-2.539h.031c.674 0 1.31.258 1.793.73.491.477.765 1.12.773 1.805v.325a2.3 2.3 0 0 1 1.048 1.93v1.47a2.304 2.304 0 0 1-2.302 2.3h-2.619a2.304 2.304 0 0 1-2.302-2.3v-1.47a2.3 2.3 0 0 1 1.047-1.93m3.124-.373a.56.56 0 0 0-.166-.327.5.5 0 0 0-.402-.16.56.56 0 0 0-.55.487zm-1.946 2.01.037-.007.04-.003h2.62a.3.3 0 0 1 .078.01.3.3 0 0 1 .223.291v1.47a.3.3 0 0 1-.302.301h-2.619a.3.3 0 0 1-.302-.3v-1.47c0-.14.096-.257.225-.291"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.245 13.58h3.623c.555 0 .934.561.727 1.076l-2.213 5.511a.78.78 0 0 1-.722.488H3.937c-.282 0-.478-.175-.51-.365l-.005-.044-.007-.058c-.093-.509-.093-1.11-.093-1.614 0-2.705 2.256-4.994 4.923-4.994"
    />
  </Svg>
);
export default IconlystUserLockBold;
