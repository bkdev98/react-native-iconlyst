import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSassCircleTwoTone = ({
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
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.637 13.677c.66-.14 1.05-.2 1.765-.2 2.491 0 2.16 1.735 1.815 2.53m-3.58-2.33c-.707-1.368-2.514-2.033-2.87-3.566-.262-1.129.567-2.558 2.374-2.977s2.99.204 3.178 1.008c.188.803-.315 1.628-2.273 2.082m-.41 3.453c.605 1.17.434 2.44-.652 3.018-1.365.728-3.329.135-1.99-1.6.656-.85 1.623-1.202 2.643-1.418"
    />
  </Svg>
);
export default IconlystSassCircleTwoTone;
