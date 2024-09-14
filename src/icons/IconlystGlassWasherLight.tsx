import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassWasherLight = ({
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
      d="m15.31 9.331-2.573 7.53M13.47 14.838c.974.12 2.934.385 3.843.802a.936.936 0 0 0 1.222-.441l2.613-7.227c.23-.458.06-1.03-.396-1.263a18.6 18.6 0 0 0-8.501-2.028c-2.92 0-5.84.663-8.503 2.028-.456.234-.625.805-.397 1.263l2.614 7.227c.225.45.765.65 1.222.441.684-.314 2.396-.541 3.122-.686"
    />
    <Circle
      cx={1.25}
      cy={1.25}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 13.5 16.82)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.185 11.773 1.82-4.16 1.873 4.16"
    />
    <Path stroke={props.color} strokeWidth={1.5} d="M8.673 10.702h2.717" />
  </Svg>
);
export default IconlystGlassWasherLight;
