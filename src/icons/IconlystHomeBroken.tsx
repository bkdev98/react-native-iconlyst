import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBroken = ({
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
      d="M21.5 21V10.425a2.3 2.3 0 0 0-.912-1.8L14.355 3.65a3.016 3.016 0 0 0-3.737 0l-.776.622M3.5 20.999V10.433c.009-.71.345-1.376.912-1.804l3.103-2.49M14.654 21a1.44 1.44 0 0 0 1.44-1.44v-5.197a1.44 1.44 0 0 0-1.44-1.441H10.38a1.44 1.44 0 0 0-1.44 1.44v5.198c0 .796.645 1.44 1.44 1.44h1.44"
    />
  </Svg>
);
export default IconlystHomeBroken;
