import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KDisplayBroken = ({
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
      d="M7.754 20.344h8.99M12.25 17.173H7.277a4.03 4.03 0 0 1-4.028-4.03V7.688a4.03 4.03 0 0 1 4.028-4.029h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029h-1.485"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.079 12.897v-1.132m0 0h.958m-.958 0H7.32L10.08 7.93zM13.296 8.086v4.65M16.44 8.254l-2.573 2.158 2.574 2.158"
    />
  </Svg>
);
export default Iconlyst4KDisplayBroken;
