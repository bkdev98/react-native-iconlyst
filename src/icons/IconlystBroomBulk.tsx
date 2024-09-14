import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroomBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.96 20.917c-.16.37-.48.64-.89.74-.03.01-1.95.01-4.39.01-.14-.44-.18-.87-.13-1.36a.75.75 0 0 0-.67-.82.76.76 0 0 0-.82.68q-.075.78.06 1.5H9.8c.68-1.29.77-2.41.78-2.46a.75.75 0 0 0-.69-.8.764.764 0 0 0-.81.69c0 .01-.1 1.22-.93 2.41-.03.05-.06.1-.08.16-1.61 0-2.72 0-2.74-.01-.45-.1-.77-.37-.93-.74-.15-.37-.11-.8.11-1.16.32-.5 1.01-1.75.94-3.51v-.78c0-.28.22-.5.5-.5h13.46c.28 0 .5.22.5.5v.76c-.07 1.77.62 3.03.92 3.49.25.4.28.83.13 1.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.57 14.164h12.228a2.28 2.28 0 0 0 2.277-2.276 2.26 2.26 0 0 0-.668-1.611 2.26 2.26 0 0 0-1.608-.665h-.005l-3.536.006.46-3.908a3.045 3.045 0 0 0-3.04-3.041A3.046 3.046 0 0 0 9.635 5.71q0 .03.004.061s.313 2.573.465 3.838H6.569a2.283 2.283 0 0 0-2.277 2.273c0 .61.235 1.182.665 1.614.43.43 1.003.668 1.612.668"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBroomBulk;
