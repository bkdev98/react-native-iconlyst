import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KDisplayLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.504 20.344h8.99M7.028 3.656h9.943A4.03 4.03 0 0 1 21 7.686v5.456a4.03 4.03 0 0 1-4.03 4.029H7.029A4.03 4.03 0 0 1 3 13.14V7.686a4.03 4.03 0 0 1 4.028-4.029"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.829 12.897v-1.132m0 0h.958m-.958 0H7.07L9.83 7.93zM13.047 8.086v4.65M16.19 8.254l-2.573 2.158 2.574 2.158"
    />
  </Svg>
);
export default Iconlyst4KDisplayLight;
