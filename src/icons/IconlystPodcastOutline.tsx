import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPodcastOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.43 7.71a.75.75 0 0 1 .076 1.057 4.9 4.9 0 0 0-1.21 3.24c0 1.224.451 2.35 1.21 3.223a.75.75 0 1 1-1.133.983 6.4 6.4 0 0 1-1.576-4.205c0-1.617.59-3.089 1.576-4.224a.75.75 0 0 1 1.058-.075M16.069 7.711a.75.75 0 0 1 1.058.075 6.4 6.4 0 0 1 1.576 4.224c0 1.6-.59 3.07-1.576 4.205a.75.75 0 1 1-1.133-.983 4.9 4.9 0 0 0 1.209-3.222 4.9 4.9 0 0 0-1.209-3.24.75.75 0 0 1 .075-1.059M12.249 10.613a1.385 1.385 0 1 0 0 2.771 1.385 1.385 0 0 0 0-2.77M9.363 12a2.885 2.885 0 1 1 5.771 0 2.885 2.885 0 0 1-5.77 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPodcastOutline;
