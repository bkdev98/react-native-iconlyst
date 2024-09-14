import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinuxLight = ({
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
      d="M10.605 7.813v1.785M13.396 7.813v1.785M14.857 17.927A9.34 9.34 0 0 0 14 11.34M10 11.34a9.34 9.34 0 0 0-.856 6.587"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.608 14.838c-.018-.41.1-.815.338-1.151l.135-.19A9.3 9.3 0 0 0 7.814 8.09v-.275a4.186 4.186 0 0 1 8.373 0v.275c0 1.939.606 3.83 1.732 5.407l.136.19c.237.336.356.74.338 1.151M15.08 19.436a2.93 2.93 0 0 1-1.47-.444l-.048-.03c-.954-.6-2.169-.6-3.124 0l-.047.03c-.442.276-.95.429-1.471.444"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.648 9.18a.7.7 0 0 1 .703 0l1.618.935c.42.242.473.827.105 1.142l-1.617 1.385a.7.7 0 0 1-.914 0l-1.618-1.385a.702.702 0 0 1 .106-1.142zM17.904 14.35c.656.09.1 1.613 1.145.642.187-.174.74-.468 1.095-.13.307.294.272.713.15 1.079-.4 1.199.706.65.706 1.502 0 .213-.1.413-.27.54l-2.826 2a1.945 1.945 0 0 1-2.724-2.724l2.006-2.631c.127-.17.39-.353.718-.279M6.096 14.35c-.655.09-.1 1.613-1.145.642-.187-.174-.74-.468-1.095-.13-.307.294-.272.713-.15 1.079.4 1.199-.706.65-.706 1.502 0 .213.1.413.27.54l2.826 2a1.945 1.945 0 0 0 2.724-2.724l-2.006-2.631c-.127-.17-.39-.353-.718-.279"
    />
  </Svg>
);
export default IconlystLinuxLight;
