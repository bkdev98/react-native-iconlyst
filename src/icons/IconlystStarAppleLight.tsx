import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarAppleLight = ({
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
      d="m17.06 9.111 3.549.286c.366.03.525.48.257.732l-3.132 2.958a3.24 3.24 0 0 0-.96 2.96l.709 3.753a.425.425 0 0 1-.627.448l-4.623-2.55a.43.43 0 0 0-.412-.003l-4.81 2.572a.425.425 0 0 1-.619-.457l.752-3.758a3.24 3.24 0 0 0-.937-2.98l-3.075-2.945a.425.425 0 0 1 .259-.73l3.515-.286a3.24 3.24 0 0 0 2.512-1.553l2.223-3.672a.425.425 0 0 1 .729.003l2.16 3.644a3.24 3.24 0 0 0 2.53 1.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.478 11.435 2.506.966-1.718 2.363m4.265-3.33-2.506.967 1.719 2.363m-1.74-2.403v-2.54"
    />
  </Svg>
);
export default IconlystStarAppleLight;
