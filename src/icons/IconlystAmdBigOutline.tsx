import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAmdBigOutline = ({
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
      d="M5.78 4.25a.194.194 0 0 0-.137.332l2.89 2.89h6.3c.937 0 1.695.759 1.695 1.695v6.3l2.89 2.89a.195.195 0 0 0 .332-.137V4.444a.194.194 0 0 0-.194-.194zV3.5zm-1.565-.454A1.69 1.69 0 0 1 5.78 2.75h13.776c.936 0 1.694.759 1.694 1.694V18.22a1.694 1.694 0 0 1-2.892 1.198l-3.11-3.11a.75.75 0 0 1-.22-.53V9.167a.194.194 0 0 0-.194-.195H8.223a.75.75 0 0 1-.53-.22l-3.11-3.11a1.69 1.69 0 0 1-.368-1.846"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.51 7.53a.75.75 0 0 1 .462.693v6.61c0 .108.087.195.195.195h6.61a.75.75 0 0 1 .531 1.28l-4.445 4.446-.53-.53.53.53a1.7 1.7 0 0 1-1.199.496h-6.22a1.695 1.695 0 0 1-1.694-1.694v-6.22c0-.45.179-.88.496-1.198l4.446-4.446a.75.75 0 0 1 .817-.162m-1.038 2.503L4.307 13.2a.2.2 0 0 0-.057.137v6.22c0 .107.087.194.194.194h6.22c.052 0 .101-.02.138-.056l3.165-3.166h-4.8a1.694 1.694 0 0 1-1.695-1.694z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAmdBigOutline;
