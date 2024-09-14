import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KDisplayTwoTone = ({
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
      d="M8.004 20.344h8.99M7.528 3.656h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H7.529A4.03 4.03 0 0 1 3.5 13.14V7.686a4.03 4.03 0 0 1 4.028-4.029"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.329 12.897v-1.132m0 0h.958m-.958 0H7.57L10.33 7.93zM13.546 8.086v4.65M16.69 8.254l-2.573 2.158 2.574 2.158"
    />
  </Svg>
);
export default Iconlyst4KDisplayTwoTone;
