import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartAiLight = ({
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
      d="M3.352 11.828c-1.016-3.176.171-6.804 3.504-7.878A4.32 4.32 0 0 1 12 6.135c1.14-2.161 3.383-2.735 5.135-2.185 3.333 1.074 4.53 4.702 3.513 7.878-1.582 5.03-7.352 8.418-8.648 8.418s-7.012-3.33-8.649-8.418"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.875 13.79-.092-.248a3.4 3.4 0 0 0-2.01-2.012l-.246-.092.247-.091a3.4 3.4 0 0 0 2.01-2.013l.09-.247.092.247a3.4 3.4 0 0 0 2.01 2.013l.247.091-.247.092a3.4 3.4 0 0 0-2.01 2.012zM14.679 14.913a1.6 1.6 0 0 0-1.065-1.066 1.6 1.6 0 0 0 1.065-1.066 1.6 1.6 0 0 0 1.064 1.066 1.6 1.6 0 0 0-1.064 1.066"
    />
  </Svg>
);
export default IconlystHeartAiLight;
