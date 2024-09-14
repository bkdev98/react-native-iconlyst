import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCircleSongOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a.75.75 0 1 1-1.5 0 8.25 8.25 0 1 0-8.25 8.25.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M10.989 16.807q-.176 0-.348-.02a2.845 2.845 0 1 1 .348.02m-.007-4.205a1.354 1.354 0 0 0-.162 2.696 1.35 1.35 0 0 0 1.505-1.18 1.35 1.35 0 0 0-1.181-1.5 1 1 0 0 0-.162-.016"
    />
    <Path
      fill={props.color}
      d="M13.072 14.958q-.045.001-.091-.005a.75.75 0 0 1-.655-.835l.756-6.266a.75.75 0 0 1 1.472-.093 2.17 2.17 0 0 0 1.3 1.42.75.75 0 0 1-.472 1.424 3.3 3.3 0 0 1-1.054-.58l-.516 4.275a.75.75 0 0 1-.74.66M20.683 20.906a.75.75 0 0 1-.53-.22l-.79-.79a3.01 3.01 0 1 1 1.09-1.03l.76.759a.75.75 0 0 1-.53 1.28m-2.777-5.153a1.512 1.512 0 1 0 1.02 2.623l.015-.013a1.51 1.51 0 0 0-1.035-2.61"
    />
  </Svg>
);
export default IconlystSearchCircleSongOutline;
