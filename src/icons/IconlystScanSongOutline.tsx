import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSongOutline = ({
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
      d="M8.403 21.75H7.147a4.65 4.65 0 0 1-4.643-4.643v-1.576a.75.75 0 0 1 1.5 0v1.576a3.147 3.147 0 0 0 3.143 3.143h1.256a.75.75 0 0 1 0 1.5M3.254 9.22a.75.75 0 0 1-.75-.75V6.893A4.65 4.65 0 0 1 7.147 2.25h1.289a.75.75 0 1 1 0 1.5h-1.29a3.147 3.147 0 0 0-3.142 3.143V8.47a.75.75 0 0 1-.75.75M17.354 21.75h-1.29a.75.75 0 1 1 0-1.5h1.29a3.147 3.147 0 0 0 3.142-3.143v-1.576a.75.75 0 0 1 1.5 0v1.576a4.65 4.65 0 0 1-4.642 4.643M12.725 15.76a4.036 4.036 0 1 1 3.91-3.018 4.05 4.05 0 0 1-3.91 3.017m0-6.576a2.538 2.538 0 1 0 2.456 3.179 2.537 2.537 0 0 0-2.456-3.18"
    />
    <Path
      fill={props.color}
      d="M15.91 13.302a.747.747 0 0 1-.726-.939l2.49-9.551a.77.77 0 0 1 .78-.56.75.75 0 0 1 .692.665 3.83 3.83 0 0 0 1.958 2.81.75.75 0 0 1-.662 1.347 4.8 4.8 0 0 1-1.893-1.668l-1.913 7.336a.75.75 0 0 1-.725.56"
    />
  </Svg>
);
export default IconlystScanSongOutline;
