import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSublimeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.073 2.394a.75.75 0 0 1 .308.606v5.21a.75.75 0 0 1-.52.715L5.598 13.188a.75.75 0 0 1-.98-.714v-5.21a.75.75 0 0 1 .52-.715l13.264-4.263a.75.75 0 0 1 .671.108M6.118 7.81v3.635l11.763-3.781V4.029zM19.073 10.921a.75.75 0 0 1 .308.606v5.21a.75.75 0 0 1-.52.715L5.598 21.715a.75.75 0 0 1-.98-.714v-5.21a.75.75 0 0 1 .52-.715l13.264-4.263a.75.75 0 0 1 .671.108M6.118 16.337v3.635l11.763-3.78v-3.636z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.654 7.032a.75.75 0 0 1 .944-.484L18.86 10.81a.75.75 0 1 1-.459 1.428L5.139 7.976a.75.75 0 0 1-.485-.944M4.654 12.243a.75.75 0 0 1 .944-.484l13.263 4.263a.75.75 0 1 1-.459 1.428L5.139 13.187a.75.75 0 0 1-.485-.944"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSublimeOutline;
