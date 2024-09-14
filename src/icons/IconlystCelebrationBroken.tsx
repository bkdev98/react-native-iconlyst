import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelebrationBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.832 6.735 6.104 13.631a.48.48 0 0 1-.277.656c-.404.134-.84.252-1.3.355"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.883 5.092a1.782 1.782 0 1 1-1.781-1.781M12.613 11.468l4.196 4.195M9.69 17.642l4.195 4.195M6.355 17.544l2.098 2.097M8.994 11.582l2.19 2.19M14.58 17.168l-1.396-1.396M14.893 21.768c-3.398.352-7.301.082-9.57-.738a.47.47 0 0 1-.26-.642l1.533-3.443.383-.861M11.195 6.616l-3.066 6.886"
    />
  </Svg>
);
export default IconlystCelebrationBroken;
