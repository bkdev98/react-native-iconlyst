import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeMuteBroken = ({
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
      d="M7.542 17.08c-.097-.022-.184-.022-.27-.022-1.66-.119-2.2.076-3.116-.68-.97-.819-.905-2.996-.905-4.592 0-1.586-.075-3.763.905-4.583.907-.755 1.457-.56 3.117-.68.442 0 .959-.128 1.336-.366l3.246-2.026c1.951-1.218 4.334.237 4.475 2.512.033.517.064 1.045.086 1.563M10.723 18.75l1.132.701c1.951 1.219 4.357-.248 4.475-2.512.086-1.326.15-2.642.172-3.968M3.998 20.625 21.25 3.373"
    />
  </Svg>
);
export default IconlystVolumeMuteBroken;
