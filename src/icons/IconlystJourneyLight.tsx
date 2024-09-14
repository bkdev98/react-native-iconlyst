import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJourneyLight = ({
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
      d="m14.307 3-2.292 1.43 1.423 2.28"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.17 4.59a7.413 7.413 0 0 1 7.282 7.383 7.45 7.45 0 0 1-1.087 3.885M9.69 21l2.293-1.43-1.424-2.28"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.83 19.412c-4.02-.074-7.27-3.345-7.28-7.383a7.3 7.3 0 0 1 1.006-3.771"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.507 5.603a1.843 1.843 0 1 1 2.607 2.606 1.843 1.843 0 0 1-2.607-2.606M15.81 15.911a1.843 1.843 0 1 1 2.608 2.606 1.843 1.843 0 0 1-2.607-2.606"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJourneyLight;
