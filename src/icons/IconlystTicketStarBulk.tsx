import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M21.25 13.476a1.484 1.484 0 0 1-1.489-1.475c0-.814.668-1.476 1.489-1.476.199 0 .39-.079.53-.217A.74.74 0 0 0 22 9.78l-.001-2.677C21.999 4.841 20.14 3 17.856 3H6.144C3.86 3 2.001 4.841 2.001 7.104L2 9.868a.74.74 0 0 0 .22.526c.14.139.331.217.53.217.849 0 1.489.597 1.489 1.39 0 .813-.668 1.475-1.489 1.475a.747.747 0 0 0-.75.744v2.675C2 19.158 3.858 21 6.143 21h11.714C20.142 21 22 19.158 22 16.895V14.22a.747.747 0 0 0-.75-.744"
        opacity={0.4}
      />
      <Path d="m15.43 11.589-1.178 1.148.278 1.623a.73.73 0 0 1-.295.724.73.73 0 0 1-.78.055l-1.456-.765-1.458.766a.74.74 0 0 1-.343.087.74.74 0 0 1-.434-.142.74.74 0 0 1-.294-.725l.277-1.623-1.178-1.148a.737.737 0 0 1 .413-1.262l1.626-.237.728-1.477A.74.74 0 0 1 12 8.2h.002a.74.74 0 0 1 .663.413l.729 1.476 1.628.238a.73.73 0 0 1 .596.5.73.73 0 0 1-.187.76" />
    </G>
  </Svg>
);
export default IconlystTicketStarBulk;
