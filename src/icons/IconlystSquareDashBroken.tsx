import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareDashBroken = ({
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
      d="M14.481 21H10.52M3.527 16.915c.312 2.233 1.795 3.803 4.047 4.066M17.393 20.981c2.252-.263 3.724-1.833 4.036-4.066M21.5 13.981V10.02M14.482 3H10.52M3.5 13.981V10.02M3.527 7.095C3.84 4.862 5.322 3.283 7.574 3.02M17.393 3.02c2.252.263 3.724 1.842 4.036 4.075"
    />
  </Svg>
);
export default IconlystSquareDashBroken;
