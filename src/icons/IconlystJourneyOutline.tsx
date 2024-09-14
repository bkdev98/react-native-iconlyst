import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJourneyOutline = ({
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
      fill={props.color}
      d="M18.439 21.748a.75.75 0 0 1-.53-1.28l2.224-2.224a.749.749 0 1 1 1.06 1.061l-2.224 2.223a.74.74 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      d="M8.992 19.527a3.55 3.55 0 0 1-3.549-3.55v-1.082a3.554 3.554 0 0 1 3.55-3.549h6.653a2.054 2.054 0 0 0 2.05-2.042v-1.1a2.05 2.05 0 0 0-2.05-2.056l-6.95.016a.75.75 0 1 1 0-1.5l6.95-.016h.006a3.55 3.55 0 0 1 3.55 3.562v1.1a3.557 3.557 0 0 1-3.549 3.537H8.996a2.05 2.05 0 0 0-2.05 2.05v1.077a2.05 2.05 0 0 0 2.05 2.05l11.67-.005a.75.75 0 0 1 0 1.5l-11.67.005z"
    />
    <Path
      fill={props.color}
      d="M20.664 19.527a.75.75 0 0 1-.53-.22l-2.224-2.223a.75.75 0 0 1 1.06-1.061l2.224 2.224a.75.75 0 0 1-.53 1.28M6.253 8.6a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35m0-4.85a1.675 1.675 0 1 0 0 3.35 1.675 1.675 0 0 0 0-3.35"
    />
  </Svg>
);
export default IconlystJourneyOutline;
