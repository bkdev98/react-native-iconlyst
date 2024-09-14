import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling3Light = ({
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
      d="M18.165 14.405h.014m.073 0a.072.072 0 1 0-.144 0 .072.072 0 0 0 .144 0M15.312 14.261h.014m.072 0a.072.072 0 1 0-.143 0 .072.072 0 0 0 .143 0M16.437 16.853h.014m.072 0a.072.072 0 1 0-.143 0 .072.072 0 0 0 .143 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.998 10.191a6.999 6.999 0 1 1 1.105 9.743"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.69 12.146c-2.63 3.927-.363 7.598 1.29 9.146a.8.8 0 0 0 .547.208h2.805c.203 0 .4-.07.548-.208 1.652-1.548 3.92-5.219 1.289-9.146-1.232-1.839-1.746-2.712-1.698-4.123s1.674-3.237.286-4.72c-1.009-.987-2.592-1.151-3.655 0-1.411 1.529.286 3.337.286 4.72s-.466 2.284-1.697 4.123"
    />
  </Svg>
);
export default IconlystBowling3Light;
