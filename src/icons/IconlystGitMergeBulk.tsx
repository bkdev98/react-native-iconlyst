import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitMergeBulk = ({
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
      d="M7.176 8.946a.75.75 0 0 0-1.5.048V19.81a.75.75 0 0 0 1.5 0v-6.188a9.18 9.18 0 0 0 7.625 4.142.75.75 0 0 0 .01-1.5 7.69 7.69 0 0 1-7.635-7.318"
      opacity={0.4}
    />
    <Circle cx={6.615} cy={6.414} r={2.977} fill={props.color} />
    <Circle cx={17.395} cy={17.122} r={2.966} fill={props.color} />
  </Svg>
);
export default IconlystGitMergeBulk;
