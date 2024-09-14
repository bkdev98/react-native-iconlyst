import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.436 15.815A.5.5 0 0 0 21 15.56H3a.5.5 0 0 0-.459.696l1.622 3.79a2.25 2.25 0 0 0 2.078 1.374h10.772a2.29 2.29 0 0 0 1.923-1.067l2.49-4.03a.5.5 0 0 0 .011-.507M9.566 13.94l7.818.15h.01a.5.5 0 0 0 .498-.463c.631-8.092-7.543-10.759-7.625-10.785a.498.498 0 0 0-.639.583c.834 3.833.663 7.135-.51 9.813a.5.5 0 0 0 .448.701"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat2Bold;
