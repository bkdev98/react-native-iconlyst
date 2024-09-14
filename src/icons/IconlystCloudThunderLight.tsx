import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudThunderLight = ({
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
      d="M18.618 16.747a4.14 4.14 0 0 0 2.437-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899S7.158 7.2 7.158 8.833c-2.27.02-4.103 1.544-4.103 4.14 0 1.68.999 3.125 2.436 3.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.746 12.25-2.975 4.098a.442.442 0 0 0 .357.702h2.435v2.573c0 .429.548.607.8.26l2.976-4.098a.442.442 0 0 0-.358-.703h-2.435V12.51a.442.442 0 0 0-.8-.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudThunderLight;
