import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRecordVideoOutline = ({
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
      fillRule="evenodd"
      d="M6.092 12.002a3.236 3.236 0 1 1 6.474 0 3.236 3.236 0 1 1-6.474 0m3.236-1.736a1.736 1.736 0 1 0 0 3.472 1.736 1.736 0 0 0 0-3.472"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.895 20.001H6.106a4.45 4.45 0 0 1-4.6-4.8v-6.4a4.5 4.5 0 0 1 4.6-4.8h6.79a4.5 4.5 0 0 1 4.6 4.8v6.4a4.5 4.5 0 0 1-4.6 4.8m-6.789-14.5a3 3 0 0 0-3.1 3.3v6.4a2.97 2.97 0 0 0 3.1 3.3h6.79a2.97 2.97 0 0 0 3.1-3.3v-6.4a2.97 2.97 0 0 0-3.1-3.3z"
    />
    <Path
      fill={props.color}
      d="M20.958 17.843a2 2 0 0 1-1.3-.463l-3.392-2.787a.75.75 0 1 1 .95-1.159l3.395 2.787a.44.44 0 0 0 .342.122.54.54 0 0 0 .542-.54l.012-7.6a.54.54 0 0 0-.884-.419l-3.407 2.788a.75.75 0 1 1-.95-1.16l3.407-2.789a2.04 2.04 0 0 1 3.334 1.583l-.012 7.6a2.04 2.04 0 0 1-2.04 2.037z"
    />
  </Svg>
);
export default IconlystRecordVideoOutline;
