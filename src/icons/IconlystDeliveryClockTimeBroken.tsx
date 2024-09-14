import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTimeBroken = ({
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
      d="m21.631 10.278-.018-2.315c-.007-2.906-1.822-4.956-4.732-4.949l-8.323.02c-2.902.006-4.715 2.064-4.708 4.97l.009 3.922M3.868 15.847c.007 2.908 1.822 4.957 4.732 4.95l3.418-.02M18.05 20.987a3.8 3.8 0 1 0-.002-7.601 3.8 3.8 0 0 0 .003 7.6M18.05 17.187l1.036-.972"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.534 6.013.017 3.59-2.799-.913-2.814.929-.008-6.581"
    />
  </Svg>
);
export default IconlystDeliveryClockTimeBroken;
