import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserShieldBold = ({
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
      d="m15.735 15.833.006.26c.005.304.012.714.012 1.278 0 .805.809 1.286 1.258 1.49.449-.206 1.252-.688 1.252-1.49 0-.567.007-.978.013-1.281l.005-.257a12 12 0 0 0-1.27-.43c-.276.066-.888.274-1.276.43m1.278 5.103q-.147 0-.289-.043c-1.103-.334-2.971-1.451-2.971-3.522 0-.55-.007-.948-.012-1.243-.015-.83-.022-1.246.403-1.673.43-.434 2.407-1.062 2.869-1.062.461 0 2.433.629 2.863 1.066.421.423.414.838.399 1.666-.005.294-.012.695-.012 1.246 0 2.07-1.86 3.188-2.96 3.522a1 1 0 0 1-.29.043M11.232 3.064A4.88 4.88 0 0 0 6.357 7.94a4.88 4.88 0 0 0 4.875 4.877 4.88 4.88 0 0 0 4.875-4.877 4.88 4.88 0 0 0-4.875-4.875M11.231 14.334c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.009 1.177-.002q.157-.005.305-.054c.425-.121.7-.469.7-.964v-4.183c0-.612-.444-1.018-1.532-1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserShieldBold;
