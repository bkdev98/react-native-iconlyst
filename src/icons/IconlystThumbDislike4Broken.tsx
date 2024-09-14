import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike4Broken = ({
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
      d="M8.95 3.602H7.6c-1.05 0-1.574 0-2.014.179a2.43 2.43 0 0 0-1.022.783c-.287.378-.424.885-.697 1.898l-.482 1.786c-.516 1.913-.774 2.87-.558 3.626.197.693.65 1.284 1.267 1.655.675.405 1.665.405 3.647.405h1.82c.34 0 .405.132.309.43-1.315 4.086-.64 5.713.664 5.98.498.104.705.099 1.099-.285 1.275-1.504 3.429-3.858 4.604-5.132.303-.33.455-.494.563-.68q.15-.258.215-.551c.047-.21.047-.432.047-.878V7.365c0-1.303 0-1.955-.25-2.454a2.36 2.36 0 0 0-1.06-1.06c-.498-.25-1.15-.25-2.452-.25M20.75 3.992v9.05"
    />
  </Svg>
);
export default IconlystThumbDislike4Broken;
