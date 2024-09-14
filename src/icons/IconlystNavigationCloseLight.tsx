import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationCloseLight = ({
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
      d="M16.875 12.63 13.25 5.36c-.701-1.408-2.712-1.4-3.402.014L4.2 16.957c-.77 1.576.83 3.262 2.444 2.578l4.16-1.763c.47-.198.997-.2 1.467-.005l.858.355M16.41 16.102l3.59 3.59M20 16.102l-3.59 3.59"
    />
  </Svg>
);
export default IconlystNavigationCloseLight;
