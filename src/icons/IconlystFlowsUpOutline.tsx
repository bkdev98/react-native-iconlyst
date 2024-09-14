import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsUpOutline = ({
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
      d="M16.236 6.485a.75.75 0 0 1 .53.22l3.176 3.177a.75.75 0 1 1-1.06 1.06l-1.896-1.896v5.601a.75.75 0 1 1-1.5 0V9.046l-1.897 1.896a.75.75 0 1 1-1.06-1.06l3.176-3.177a.75.75 0 0 1 .53-.22m0 10.578a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.177a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M7.234 2.47a.75.75 0 0 1 1.06 0l3.177 3.176a.75.75 0 0 1-1.06 1.06L8.513 4.812v8.777a.75.75 0 0 1-1.5 0V4.811L5.118 6.707a.75.75 0 0 1-1.06-1.06zm.53 13.534a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.177a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowsUpOutline;
