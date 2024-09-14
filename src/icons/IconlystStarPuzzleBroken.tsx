import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarPuzzleBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.586 19.67 12 18.931l1.169.612M6.828 16.519l.202-1.18-.626-.603M7.5 9.74l1.428-.206.724-1.458M14.709 8.805l.362.728 1.307.19M17.913 14.422l-.944.917.223 1.296M6.304 19.55l-.167.964c-.114.666.588 1.17 1.187.855l.763-.397M17.64 19.219l.223 1.296c.115.666-.587 1.17-1.187.855l-1.168-.603M13.625 6.62l-.892-1.8a.82.82 0 0 0-1.466 0l-.447.9M4.529 12.919l-1.28-1.242c-.487-.468-.219-1.287.452-1.386l.999-.145M18.992 10.102l1.307.188c.671.1.94.919.452 1.387l-.944.917"
    />
  </Svg>
);
export default IconlystStarPuzzleBroken;
