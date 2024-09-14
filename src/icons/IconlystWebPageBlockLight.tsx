import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageBlockLight = ({
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
      d="M20.969 12.006V7.985c0-2.922-1.82-4.985-4.744-4.985H7.86C4.945 3 3.117 5.063 3.117 7.985v7.88c0 2.922 1.82 4.985 4.743 4.985h1.736"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.43 14.865a3.608 3.608 0 1 1-5.154 5.052"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.43 14.865a3.61 3.61 0 0 0-5.154 5.052"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.43 14.865-5.155 5.052M6.434 6.52H6.38m2.52 0h-.055m2.52 0h-.056M20.969 9.438H3.116"
    />
  </Svg>
);
export default IconlystWebPageBlockLight;
