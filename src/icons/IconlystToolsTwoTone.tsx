import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToolsTwoTone = ({
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
      d="m17.28 10.247-5.899 5.898a2.94 2.94 0 0 1-4.157 0L5.008 13.93a2.94 2.94 0 0 1 0-4.157l5.898-5.898a2.94 2.94 0 0 1 4.157 0L17.28 6.09a2.94 2.94 0 0 1 0 4.157"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.98 20.986h4.372M16.162 11.627l5.258 5.258a1.91 1.91 0 0 1 0 2.7l-.702.703a1.91 1.91 0 0 1-2.7 0l-5.258-5.259"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystToolsTwoTone;
