import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdCircleBold = ({
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
      d="M12.75 10.89v2.36a.75.75 0 0 1-1.5 0v-2.36a.75.75 0 0 1 1.5 0m3.174 2.42a.75.75 0 0 1-1.5 0v-2.62a2.425 2.425 0 0 0-2.423-2.42 2.425 2.425 0 0 0-2.423 2.42v2.62a2.425 2.425 0 0 0 3.724 2.041.75.75 0 0 1 .818 1.258 3.926 3.926 0 0 1-6.042-3.299v-2.62c0-2.161 1.76-3.92 3.923-3.92a3.926 3.926 0 0 1 3.923 3.92zM12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdCircleBold;
