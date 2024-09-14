import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftHandBulk = ({
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
      fillRule="evenodd"
      d="M19.454 9.88a.93.93 0 0 0-.68-.283 2.01 2.01 0 0 0-2.006 2.007c0 .017 0 .053-.004.066l-.008 2.032a.42.42 0 0 1-.424.424.42.42 0 0 1-.424-.424V5.443c0-.396-.159-.782-.436-1.06-.566-.565-1.53-.568-2.114.002a1.54 1.54 0 0 0-.434 1.058v5.454c0 .234-.19.424-.424.424a.435.435 0 0 1-.424-.424v-7.16c0-.194-.039-.394-.111-.562a1.5 1.5 0 0 0-.326-.488 1.5 1.5 0 0 0-1.623-.326 1.5 1.5 0 0 0-.487.326 1.4 1.4 0 0 0-.323.484 1.4 1.4 0 0 0-.114.565v7.161c0 .234-.19.424-.424.424a.435.435 0 0 1-.424-.424V6.72c0-.798-.694-1.498-1.487-1.498-.798 0-1.498.695-1.498 1.487v7.882a7.2 7.2 0 0 0 2.145 5.06 7.23 7.23 0 0 0 5.096 2.1c1.91 0 3.721-.746 5.096-2.1a7.22 7.22 0 0 0 2.145-5.074v-4.013c0-.26-.1-.499-.287-.684"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLeftHandBulk;
