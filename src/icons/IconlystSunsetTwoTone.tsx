import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunsetTwoTone = ({
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
      d="M7.386 12.302a4.67 4.67 0 0 1 9.338 0M12.055 3.133v1.372M21.055 12.133h-1.372M4.427 12.133H3.055M18.42 5.768l-.97.97M6.662 6.738l-.97-.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.771 16.444c.562.223.922.54 1.96.54 1.588 0 1.588-.763 3.177-.763s1.588.763 3.166.763c1.588 0 1.588-.763 3.177-.763 1.598 0 1.598.763 3.187.763 1.143 0 1.462-.392 2.139-.614M6.648 20.667c.837-.191 1.102-.668 2.35-.668 1.58 0 1.58.763 3.167.763 1.589 0 1.589-.763 3.177-.763 1.26 0 1.525.477 2.361.668"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunsetTwoTone;
