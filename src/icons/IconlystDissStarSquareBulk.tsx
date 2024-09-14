import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDissStarSquareBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.723 3 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031C22 4.723 19.877 2.5 16.717 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.076 15.484 9.554-9.548a.75.75 0 1 0-1.06-1.061l-3.986 3.984-.725-1.44a1.4 1.4 0 0 0-.603-.594 1.42 1.42 0 0 0-1.09-.094c-.358.115-.65.362-.824.702l-.917 1.895-2.195.309a1.37 1.37 0 0 0-.814.413 1.393 1.393 0 0 0 .03 1.985l1.561 1.416L8.8 14.64l-3.428 3.425a.749.749 0 1 0 1.061 1.06l3.495-3.492a.8.8 0 0 0 .15-.15m6.093-1.94 1.59-1.51a.751.751 0 0 0-1.033-1.087l-1.59 1.51c-.34.325-.495.793-.413 1.253l.374 1.96-1.842-.947a.75.75 0 0 0-.686 1.334l1.946 1a1.4 1.4 0 0 0 .897.153 1.41 1.41 0 0 0 1.164-1.62zm-5.533-2.732a1.42 1.42 0 0 0 1.062-.755l.89-1.827.879 1.744-3.04 3.038a1.4 1.4 0 0 0-.355-.557L8.597 11.1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDissStarSquareBulk;
