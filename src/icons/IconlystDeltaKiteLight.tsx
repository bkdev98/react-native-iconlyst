import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeltaKiteLight = ({
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
      d="M12 2.75C7.887 4.818 4.683 8.527 2.974 12.946c4.05-2.857 7.569-.616 9.026 2.995 1.457-3.611 4.977-5.853 9.027-2.995C19.317 8.527 16.113 4.818 12 2.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.516 8.286c1.667-1.955 5.438-1.449 6.486 1.146 1.047-2.595 4.818-3.101 6.485-1.146M12.106 18.799c.166 1.124.05 1.829-.15 2.44M3.547 18.799c-.13-1.42.763-1.728.361-3.201M20.004 18.799c-.13-1.42.763-1.728.36-3.201M12.002 2.75v13.11"
    />
  </Svg>
);
export default IconlystDeltaKiteLight;
