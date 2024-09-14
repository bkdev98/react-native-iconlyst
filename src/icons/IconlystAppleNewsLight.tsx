import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleNewsLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.673 20C4.749 20 4 19.25 4 18.325v-4.681c1.917 2.537 3.482 4.453 6.355 6.354zM18.327 4C19.251 4 20 4.75 20 5.673v4.682C18.084 7.818 16.518 5.902 13.646 4zM4.49 9.439A1.67 1.67 0 0 1 4 8.255V5.673C4 4.749 4.75 4 5.673 4h2.582c.444 0 .87.176 1.184.49l10.07 10.071c.314.314.49.74.49 1.183v2.583C20 19.25 19.252 20 18.328 20h-2.583c-.444 0-.869-.177-1.183-.49z"
    />
  </Svg>
);
export default IconlystAppleNewsLight;
