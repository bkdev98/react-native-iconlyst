import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShrinkAltLight = ({
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
      d="M9.666 11.46a1.76 1.76 0 0 0 1.76-1.762v-4.98a1.76 1.76 0 0 0-3.521 0v3.22h-3.22a1.76 1.76 0 0 0 0 3.521zM14.334 21.043a1.76 1.76 0 0 0 1.761-1.76v-3.22h3.22a1.76 1.76 0 0 0 0-3.522h-4.98a1.76 1.76 0 0 0-1.762 1.76v4.981c0 .973.789 1.761 1.761 1.761"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShrinkAltLight;
