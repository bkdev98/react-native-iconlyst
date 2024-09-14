import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPodcastTwoTone = ({
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
      d="M21.5 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.19 15.722a5.65 5.65 0 0 1-1.393-3.714c0-1.43.52-2.728 1.392-3.733M16.81 8.277a5.66 5.66 0 0 1 1.393 3.733c0 1.412-.52 2.71-1.392 3.714"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.499 9.863a2.135 2.135 0 1 1 0 4.27 2.135 2.135 0 0 1 0-4.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPodcastTwoTone;
