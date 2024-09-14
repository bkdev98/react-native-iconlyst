import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletRemoveBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.678 10.995a5.4 5.4 0 0 0 .397-2.038V7.43c0-.62-.502-1.121-1.122-1.121H9.09c-.62 0-1.121.502-1.121 1.121v1.744a5.054 5.054 0 0 0 5.55 5.03 4.8 4.8 0 0 0 2.122-.732M7.693 19.236 9.46 21m-1.766-1.764-1.767-1.765m1.767 1.765 1.766-1.765m-1.766 1.765L5.926 21M17.562 21c0-.74-.613-1.34-1.368-1.34h-1.056c-1.167-.006-2.11-.93-2.117-2.073V14.39M10.48 3v3.31M15.564 3v3.31"
    />
  </Svg>
);
export default IconlystPowerOutletRemoveBroken;