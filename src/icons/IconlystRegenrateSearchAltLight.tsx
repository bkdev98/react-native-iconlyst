import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenrateSearchAltLight = ({
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
      d="M19.228 11.1a8.1 8.1 0 0 1-8.1 8.1 8.1 8.1 0 0 1-8.1-8.1 8.1 8.1 0 0 1 8.1-8.1M19.456 21a1.515 1.515 0 1 0 0-3.03 1.515 1.515 0 0 0 0 3.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.452 8.56.108-.292a4.02 4.02 0 0 1 2.376-2.38l.292-.108-.292-.108a4.02 4.02 0 0 1-2.376-2.38L16.452 3l-.108.292a4.03 4.03 0 0 1-2.376 2.38l-.292.108.292.108a4.03 4.03 0 0 1 2.376 2.38zM11.498 11.663a1.9 1.9 0 0 1 1.258-1.26 1.89 1.89 0 0 1-1.258-1.26 1.89 1.89 0 0 1-1.259 1.26 1.9 1.9 0 0 1 1.259 1.26"
    />
  </Svg>
);
export default IconlystRegenrateSearchAltLight;
