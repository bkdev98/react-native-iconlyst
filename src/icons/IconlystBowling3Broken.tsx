import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling3Broken = ({
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
      d="M18.165 14.404h.014m.073 0a.072.072 0 1 0-.144 0 .072.072 0 0 0 .144 0M15.312 14.261h.014m.072 0a.072.072 0 1 0-.143 0 .072.072 0 0 0 .143 0M16.437 16.853h.014m.072 0a.072.072 0 1 0-.143 0 .072.072 0 0 0 .143 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.102 19.935a6.999 6.999 0 1 0 1.542-11.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.69 12.146c1.232-1.839 1.698-2.74 1.698-4.123s-1.697-3.191-.286-4.72c1.063-1.151 2.646-.987 3.655 0 1.388 1.483-.237 3.308-.286 4.72s.466 2.284 1.698 4.123c2.63 3.927.363 7.598-1.29 9.146a.8.8 0 0 1-.547.208H5.527c-.203 0-.4-.07-.548-.208-1.18-1.106-2.675-3.296-2.472-5.89"
    />
  </Svg>
);
export default IconlystBowling3Broken;
