import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartReturnOutline = ({
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
      d="M7.956 17.121a2.515 2.515 0 0 1-2.491-2.3L4.577 4.236l-1.453-.25a.75.75 0 1 1 .256-1.479l2.024.35a.75.75 0 0 1 .619.677l.937 11.163a1.01 1.01 0 0 0 1 .921h10.622a1.01 1.01 0 0 0 .992-.86l.923-6.383a.553.553 0 0 0-.47-.628l-1.592-.006a.75.75 0 1 1 0-1.5c1.687.005 1.739.013 1.8.021a2.053 2.053 0 0 1 1.741 2.33l-.923 6.38a2.515 2.515 0 0 1-2.475 2.146H7.956z"
    />
    <Path
      fill={props.color}
      d="M15.622 11.5a.75.75 0 0 1-.75-.75v-1.3a1.7 1.7 0 0 0-1.7-1.7H9.607a.75.75 0 0 1 0-1.5h3.565a3.207 3.207 0 0 1 3.2 3.2v1.3a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M11.411 9.645a.74.74 0 0 1-.53-.22L8.987 7.531a.75.75 0 0 1 0-1.06l1.894-1.9a.75.75 0 0 1 1.061 1.061l-1.364 1.371 1.364 1.364a.75.75 0 0 1-.53 1.28zM7.543 21.501a1.231 1.231 0 1 1 .002-2.462 1.231 1.231 0 0 1-.002 2.462M18.565 21.501a1.23 1.23 0 1 1 0-2.461 1.23 1.23 0 0 1 0 2.461"
    />
  </Svg>
);
export default IconlystShoppingCartReturnOutline;
