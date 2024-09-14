import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalCircleBold = ({
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
      d="m16.946 14.439-2.419 1.75a.74.74 0 0 1-.78.061.75.75 0 0 1-.409-.668v-6.79a.75.75 0 1 1 1.5 0v5.322l1.229-.89a.75.75 0 1 1 .879 1.214m-6.285 1.143a.75.75 0 0 1-1.5 0v-5.321l-1.23.89a.75.75 0 0 1-.879-1.216l2.419-1.75a.749.749 0 0 1 1.19.607zM12 2.688c-5.239 0-9.5 4.26-9.5 9.5 0 5.237 4.261 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapVerticalCircleBold;
