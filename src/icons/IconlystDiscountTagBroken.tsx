import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTagBroken = ({
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
      d="M20.336 10.591c1.207 1.21 1.224 3.066.02 4.28a806 806 0 0 1-5.228 5.228c-1.212 1.201-3.068 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034.003-1.411 1.07-2.677 2.456-2.915.284-.05 3.616-.043 4.995-.042 1.364 0 2.527.491 3.49 1.452l2.507 2.505M12.15 15.161V8.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.972 11.873v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.334 11.873v-.052m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
  </Svg>
);
export default IconlystDiscountTagBroken;
