import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCloseOutline = ({
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
      d="M9.52 2.47a.75.75 0 0 1 1.06 0l1.67 1.67 1.67-1.67a.75.75 0 1 1 1.06 1.06L13.31 5.2l1.67 1.67a.75.75 0 0 1-1.06 1.06l-1.67-1.67-1.67 1.67a.75.75 0 1 1-1.06-1.06l1.669-1.67-1.67-1.67a.75.75 0 0 1 0-1.06M6.152 4.608A1.934 1.934 0 0 0 4.22 6.542v2.05c0 .795.312 1.557.87 2.123l4.35 3.871.032.031c.428.429.67 1.01.67 1.618v3.225c0 .557.562.939 1.08.732l1.882-.749c.3-.12.498-.41.498-.732v-1.99c0-.642.269-1.254.743-1.687l4.912-4.86.026-.024a3.02 3.02 0 0 0 .998-2.243V6.542a1.934 1.934 0 0 0-1.934-1.934.75.75 0 1 1 0-1.5 3.434 3.434 0 0 1 3.434 3.434v1.365c0 1.274-.537 2.489-1.48 3.346l-4.913 4.859-.027.025a.79.79 0 0 0-.26.584v1.99c0 .936-.57 1.78-1.443 2.126l-1.88.749A2.29 2.29 0 0 1 8.64 19.46v-3.225a.8.8 0 0 0-.218-.546l-4.348-3.87-.031-.03a4.52 4.52 0 0 1-1.324-3.196v-2.05a3.434 3.434 0 0 1 3.434-3.435.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterCloseOutline;
