import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftDiamondBold = ({
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
      d="M15.585 13.063h-5.346l1.518 1.51a.75.75 0 1 1-1.058 1.065l-2.804-2.791a.75.75 0 0 1-.221-.532v-.001c0-.047.018-.09.027-.133.009-.052.01-.106.03-.155a.7.7 0 0 1 .169-.247l2.799-2.79a.749.749 0 1 1 1.058 1.063l-1.516 1.51h5.344a.75.75 0 0 1 0 1.5m4.54-3.915-4.957-4.96c-1.893-1.891-4.494-1.833-6.474.145L4.022 9.005c-1.978 1.979-2.036 4.58-.143 6.474l4.958 4.959c.922.92 2.012 1.38 3.117 1.38 1.163 0 2.342-.51 3.358-1.524l4.67-4.672c.953-.951 1.477-2.063 1.518-3.218.042-1.19-.433-2.315-1.374-3.256"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftDiamondBold;
