import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshCircleRightOutline = ({
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
      fillRule="evenodd"
      d="M18.7 6.897C16.946 6.021 14.577 5.5 12 5.5s-4.946.52-6.7 1.397c-1.708.855-3.05 2.173-3.05 3.853s1.342 2.998 3.05 3.853C7.054 15.479 9.423 16 12 16h1a.75.75 0 0 0 0-1.5h-1c-2.394 0-4.525-.487-6.029-1.239-1.549-.774-2.221-1.706-2.221-2.511s.672-1.737 2.221-2.511C7.475 7.487 9.606 7 12 7s4.525.487 6.029 1.239c1.549.774 2.221 1.706 2.221 2.511 0 .506-.255 1.053-.852 1.6-.6.548-1.497 1.048-2.636 1.43a.75.75 0 0 0 .476 1.422c1.272-.425 2.374-1.015 3.172-1.746.8-.732 1.34-1.652 1.34-2.706 0-1.68-1.342-2.998-3.05-3.853"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.97 12.22a.75.75 0 0 0 0 1.06l1.97 1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshCircleRightOutline;
