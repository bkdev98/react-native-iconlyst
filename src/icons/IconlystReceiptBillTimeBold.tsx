import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillTimeBold = ({
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
      d="M9.224 20.85a4.1 4.1 0 0 0 1.85.292c.286-.022.411-.351.264-.598a6.2 6.2 0 0 1-.866-3.166c0-3.424 2.789-6.21 6.216-6.21.497 0 .982.059 1.446.17.266.063.535-.13.535-.404l-.007-4.357c0-2.77-1.586-4.425-4.242-4.425h-7.3c-2.63 0-4.265 1.696-4.265 4.425l-.01 12.254c0 .59.296 1.13.794 1.444a1.69 1.69 0 0 0 1.644.095l.758-.364a1.28 1.28 0 0 1 1.04-.03zm2.36-12.426H6.726a.75.75 0 1 1 0-1.5h4.856a.75.75 0 0 1 0 1.5m-1.62 3.772H6.727a.749.749 0 1 1 0-1.5h3.237a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.84 19.098a.75.75 0 0 1-.383-.105l-1.176-.701a.75.75 0 0 1-.366-.644v-1.51a.75.75 0 0 1 1.5 0v1.084l.809.48a.751.751 0 0 1-.384 1.396"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.688 21.848a4.473 4.473 0 0 1-4.466-4.47 4.47 4.47 0 0 1 4.466-4.46 4.47 4.47 0 0 1 4.467 4.46 4.473 4.473 0 0 1-4.467 4.47m0-7.43a2.967 2.967 0 0 0-2.966 2.96 2.97 2.97 0 0 0 2.966 2.97 2.97 2.97 0 0 0 2.967-2.97 2.967 2.967 0 0 0-2.967-2.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillTimeBold;
