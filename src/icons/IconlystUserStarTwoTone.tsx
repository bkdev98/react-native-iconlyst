import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserStarTwoTone = ({
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
      d="m17.351 14.787.688 1.384c.034.07.1.118.178.13l1.54.222a.24.24 0 0 1 .157.09.23.23 0 0 1-.025.307L18.772 18a.23.23 0 0 0-.066.208l.267 1.522a.234.234 0 0 1-.194.264.25.25 0 0 1-.153-.023l-1.372-.719a.23.23 0 0 0-.22 0l-1.381.723a.24.24 0 0 1-.32-.097.25.25 0 0 1-.025-.15l.268-1.522a.23.23 0 0 0-.067-.208l-1.122-1.08a.23.23 0 0 1 0-.329h0a.3.3 0 0 1 .134-.066l1.54-.223a.24.24 0 0 0 .178-.13l.688-1.383a.235.235 0 0 1 .317-.106q.07.036.107.106"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.591 14.871c-3.374 0-6.251.51-6.251 2.552s2.86 2.57 6.251 2.57"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.585 7.993a3.993 3.993 0 1 1-7.986 0 3.993 3.993 0 0 1 7.986 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserStarTwoTone;
