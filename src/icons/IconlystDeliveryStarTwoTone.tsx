import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryStarTwoTone = ({
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
      d="m21.14 10.372-.018-2.316c-.007-2.908-1.822-4.96-4.733-4.951l-8.33.019c-2.9.007-4.716 2.066-4.71 4.974l.02 7.846c.006 2.91 1.822 4.958 4.734 4.951l3.186-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.872 13.743.916 1.844a.32.32 0 0 0 .238.173l2.052.297c.082.01.158.055.209.12a.305.305 0 0 1-.034.41l-1.487 1.437a.3.3 0 0 0-.09.278l.357 2.03a.31.31 0 0 1-.258.352.35.35 0 0 1-.204-.032l-1.829-.957a.3.3 0 0 0-.293 0l-1.841.963a.32.32 0 0 1-.427-.131c-.032-.06-.042-.13-.032-.198l.356-2.03a.31.31 0 0 0-.09-.277l-1.494-1.437a.31.31 0 0 1 0-.44h0a.35.35 0 0 1 .179-.088l2.053-.298a.32.32 0 0 0 .237-.173l.915-1.843a.31.31 0 0 1 .424-.14q.092.047.143.14"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.04 3.104.017 6.592-2.799-.911-2.816.928-.008-6.584"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryStarTwoTone;
