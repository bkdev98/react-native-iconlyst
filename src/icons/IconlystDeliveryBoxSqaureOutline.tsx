import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxSqaureOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.601 17.504a2.1 2.1 0 0 1-.877-.265l-3.127-1.81a2.052 2.052 0 0 1-1.027-1.78v-3.61c0-.73.392-1.41 1.028-1.78l3.126-1.8c.636-.37 1.42-.37 2.056 0l3.125 1.8a2.06 2.06 0 0 1 1.029 1.78v3.61c0 .74-.392 1.41-1.028 1.78l-3.126 1.81a2.1 2.1 0 0 1-.877.265.7.7 0 0 1-.302 0m-3.531-6.94v3.085c0 .2.106.38.278.48l2.654 1.537v-3.403zm4.432 1.697v3.405l2.654-1.537a.56.56 0 0 0 .278-.48v-3.086zm2.162-2.987-2.635-1.525a.6.6 0 0 0-.555 0L8.839 9.275l2.912 1.686z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.516 2.12 8.426-.02c1.658 0 3.061.58 4.046 1.64.98 1.039 1.491 2.489 1.495 4.12l.019 7.939c.004 1.62-.5 3.07-1.475 4.12-.981 1.06-2.381 1.66-4.039 1.66l-8.425.02c-1.658 0-3.061-.58-4.046-1.64-.98-1.04-1.491-2.49-1.495-4.12l-.018-7.94C2 6.28 2.507 4.83 3.483 3.78c.98-1.06 2.38-1.66 4.033-1.66m8.43 1.48-8.426.02c-1.282 0-2.269.449-2.938 1.179-.674.72-1.081 1.78-1.078 3.1l.018 7.94c.003 1.31.414 2.38 1.09 3.1.671.72 1.66 1.16 2.947 1.16l8.425-.02c1.288 0 2.275-.45 2.942-1.18.674-.72 1.079-1.78 1.076-3.1l-.02-7.94c-.002-1.31-.412-2.38-1.09-3.1-.67-.72-1.66-1.16-2.946-1.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxSqaureOutline;
