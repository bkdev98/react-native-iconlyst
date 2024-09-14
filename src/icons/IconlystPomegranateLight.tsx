import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPomegranateLight = ({
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
      d="m6.272 7.545 3.416-1.561L8.969 3l3.072.752L15.03 3l-.719 2.984 3.416 1.561a4.09 4.09 0 0 1 2.386 3.716v3.87a4.09 4.09 0 0 1-2.431 3.736l-4.03 1.783a4.09 4.09 0 0 1-3.306 0l-4.03-1.783a4.09 4.09 0 0 1-2.431-3.736v-3.87c0-1.6.932-3.051 2.386-3.716"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.448 14.294c0 1.081-.697 2-1.667 2.331"
    />
  </Svg>
);
export default IconlystPomegranateLight;
