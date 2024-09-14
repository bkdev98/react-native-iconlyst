import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarPuzzleTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.086 19.67 1.415-.738 1.169.612M7.328 16.519l.202-1.18-.626-.603M8 9.74l1.428-.206.724-1.458M15.209 8.805l.362.728 1.307.19M18.413 14.422l-.944.917.223 1.296"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.804 19.55-.167.964c-.114.666.588 1.17 1.187.855l.763-.397M18.14 19.219l.223 1.296c.115.666-.587 1.17-1.187.855l-1.168-.603M14.125 6.62l-.892-1.8a.82.82 0 0 0-1.466 0l-.447.9M5.029 12.919l-1.28-1.242c-.487-.468-.219-1.287.452-1.386l.999-.145M19.492 10.102l1.307.188c.671.1.94.919.452 1.387l-.944.917"
    />
  </Svg>
);
export default IconlystStarPuzzleTwoTone;
