import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTimeTwoTone = ({
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
      d="m21.131 10.278-.018-2.315c-.007-2.906-1.822-4.956-4.732-4.949l-8.323.02c-2.902.006-4.715 2.064-4.708 4.97l.018 7.843c.007 2.907 1.822 4.957 4.732 4.95l3.418-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.55 20.987a3.8 3.8 0 1 0-.002-7.601 3.8 3.8 0 0 0 .003 7.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.55 17.187 1.036-.972M15.034 3.013l.017 6.59-2.799-.913-2.814.929-.008-6.581"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryClockTimeTwoTone;
