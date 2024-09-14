import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsDownOutline = ({
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
      d="M7.764 2.25a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 3.176a.75.75 0 0 1 .75.75v.011a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.177a.75.75 0 0 1 .75.75v5.601l1.897-1.896a.75.75 0 1 1 1.06 1.06l-3.176 3.177a.75.75 0 0 1-1.06 0l-3.177-3.177a.75.75 0 1 1 1.06-1.06l1.896 1.896V9.353a.75.75 0 0 1 .75-.75M16.236 3.309a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.176a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.177a.75.75 0 0 1 .75.75v8.777l1.896-1.896a.75.75 0 1 1 1.06 1.06l-3.176 3.177a.75.75 0 0 1-1.06 0l-3.177-3.176a.75.75 0 1 1 1.06-1.06l1.897 1.895v-8.777a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowsDownOutline;
