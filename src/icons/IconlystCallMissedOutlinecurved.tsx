import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.672 9.507a.749.749 0 0 1-.53-1.28l2.47-2.47-2.47-2.47a.749.749 0 1 1 1.06-1.06l2.47 2.47 2.47-2.47a.749.749 0 1 1 1.06 1.06l-2.47 2.47 2.47 2.47a.749.749 0 1 1-1.06 1.06l-2.47-2.47-2.47 2.47a.74.74 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.515 16.837c4.709 4.71 7.846 5.948 9.83 5.948.982 0 1.683-.302 2.15-.639.023-.012 2.184-1.34 2.547-3.337.17-.927-.091-1.844-.754-2.654-2.754-3.343-4.156-3.029-5.703-2.276-.95.466-1.701.83-3.822-1.29s-1.755-2.872-1.292-3.823c.755-1.548 1.066-2.95-2.276-5.705-.814-.665-1.733-.925-2.671-.75-1.966.37-3.283 2.483-3.281 2.483C1.19 6.271.476 9.798 7.515 16.837M5.833 3.779q.132-.021.26-.022c.394 0 .772.153 1.149.463 2.695 2.22 2.354 2.92 1.88 3.89-.71 1.456-1.08 2.879 1.58 5.54 2.662 2.66 4.084 2.29 5.54 1.579l.002-.002c.968-.47 1.668-.81 3.885 1.881.379.462.524.922.443 1.407-.187 1.116-1.495 2.127-1.886 2.372-1.411 1.005-4.81.192-10.111-5.11C3.272 10.474 2.458 7.075 3.5 5.609c.208-.338 1.213-1.64 2.332-1.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallMissedOutlinecurved;
