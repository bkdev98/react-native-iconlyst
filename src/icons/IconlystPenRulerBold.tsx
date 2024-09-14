import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenRulerBold = ({
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
      fillRule="evenodd"
      d="m11.07 9.557 3.95 3.959a.426.426 0 0 1 0 .6l-5.401 5.42a5.66 5.66 0 0 1-4.05 1.71c-.18 0-.36-.01-.53-.03-.83-.07-1.5-.73-1.6-1.55-.2-1.71.37-3.39 1.57-4.63l5.46-5.48a.425.425 0 0 1 .6 0M21.38 6.356c.01.86-.31 1.67-.91 2.29l-3.8 3.808a.423.423 0 0 1-.6 0l-3.943-3.96a.424.424 0 0 1 0-.598l3.732-3.75c.6-.61 1.4-.96 2.26-.97h.04c.85 0 1.64.33 2.25.92.61.6.96 1.4.97 2.26M4.831 11.548a.5.5 0 0 0 .707 0l5.786-5.787a.496.496 0 0 0 0-.707l-1.06-1.06a3.743 3.743 0 0 0-5.294 0L3.835 5.127c-.433.434-.799.947-.977 1.534-.43 1.42-.06 2.853.92 3.834zM20.576 14.305l-1.039-1.04a.5.5 0 0 0-.707 0l-5.786 5.787a.5.5 0 0 0 0 .706l1.04 1.042a3.76 3.76 0 0 0 2.658 1.093c.962 0 1.922-.365 2.651-1.094l1.136-1.135c.432-.433.798-.945.976-1.53.43-1.42.057-2.851-.929-3.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenRulerBold;
