import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowSwitchVerticalOutline = ({
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
      d="M16.235 2.779a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.177a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.176a.75.75 0 0 1 .75.75v8.778l1.897-1.896a.75.75 0 1 1 1.06 1.06l-3.176 3.177a.75.75 0 0 1-1.06 0l-3.177-3.177a.75.75 0 1 1 1.06-1.06l1.896 1.896V9.882a.75.75 0 0 1 .75-.75M7.765 2.779a.75.75 0 0 1 .53.22l3.177 3.176a.75.75 0 0 1-1.061 1.06L8.515 5.34v8.777a.75.75 0 0 1-1.5 0V5.34L5.119 7.236a.75.75 0 0 1-1.061-1.06l3.176-3.177a.75.75 0 0 1 .53-.22m0 13.754a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m0 3.177a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowSwitchVerticalOutline;
