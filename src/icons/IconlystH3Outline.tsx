import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH3Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.5 5.824a.75.75 0 0 1 .75.75v5.603h6.97V6.574a.75.75 0 1 1 1.5 0V19.28a.75.75 0 0 1-1.5 0v-5.603H4.25v5.603a.75.75 0 0 1-1.5 0V6.574a.75.75 0 0 1 .75-.75M16.515 12.926a2.867 2.867 0 1 1 4.8 2.117 2.867 2.867 0 1 1-4.801 2.118.75.75 0 1 1 1.5 0 1.367 1.367 0 1 0 1.368-1.367.75.75 0 0 1 0-1.5 1.368 1.368 0 1 0-1.367-1.369.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.709 6.574a.75.75 0 0 1 .75-.75h2.082a.75.75 0 1 1 0 1.5H2.459a.75.75 0 0 1-.75-.75m8.47 0a.75.75 0 0 1 .75-.75h2.082a.75.75 0 0 1 0 1.5H10.93a.75.75 0 0 1-.75-.75M1.71 19.28a.75.75 0 0 1 .75-.75h2.082a.75.75 0 0 1 0 1.5H2.459a.75.75 0 0 1-.75-.75m8.47 0a.75.75 0 0 1 .75-.75h2.082a.75.75 0 0 1 0 1.5H10.93a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystH3Outline;
