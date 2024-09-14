import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJourneyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.558 3-2.293 1.43 1.423 2.28"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.42 4.589a7.41 7.41 0 0 1 6.448 3.994M19.702 11.973a7.45 7.45 0 0 1-1.087 3.884M9.94 21l2.293-1.43-1.424-2.28"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.08 19.412a7.42 7.42 0 0 1-6.41-3.92M4.8 12.029a7.3 7.3 0 0 1 1.006-3.771"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.757 5.605A1.843 1.843 0 1 1 8.364 8.21a1.843 1.843 0 0 1-2.607-2.606M16.06 15.91a1.843 1.843 0 1 1 2.608 2.606 1.843 1.843 0 0 1-2.607-2.606"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJourneyBroken;
