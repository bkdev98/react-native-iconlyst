import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCounterClockwiseUndoBroken = ({
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
      d="M4.658 7.566c2.105-3.708 6.594-5.512 10.774-4.07a9 9 0 0 1 5.85 6.584M20.994 14.931c-1.614 4.7-6.735 7.196-11.435 5.572a8.96 8.96 0 0 1-5.733-6.093"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.416 4.271v3.3h3.281M9.484 14.57l3.174-1.898V8.574"
    />
  </Svg>
);
export default IconlystCounterClockwiseUndoBroken;
