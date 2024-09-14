import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCloseBulk = ({
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
      d="M17.904 3.483h1.172a3.19 3.19 0 0 1 3.185 3.185V8.03a4.28 4.28 0 0 1-1.413 3.173l-4.907 4.855c-.235.212-.36.493-.36.787v1.99c0 .84-.505 1.584-1.285 1.894l-1.882.749a2.05 2.05 0 0 1-1.899-.206 2.04 2.04 0 0 1-.894-1.688V16.36c0-.276-.108-.538-.305-.735l-4.344-3.867A4.25 4.25 0 0 1 3.7 8.717v-2.05a3.19 3.19 0 0 1 3.185-3.184h1.17c.148 0 .273.11.309.255.104.423.317.824.648 1.155l.22.22a.3.3 0 0 1 0 .424l-.22.22a2.5 2.5 0 0 0 0 3.536c.976.977 2.56.977 3.535 0l.221-.22a.3.3 0 0 1 .424 0l.22.22a2.5 2.5 0 0 0 1.768.732 2.498 2.498 0 0 0 1.767-4.267l-.22-.221a.3.3 0 0 1 0-.424l.22-.22c.331-.331.544-.732.649-1.155a.326.326 0 0 1 .31-.255"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.31 8.056a.75.75 0 1 1-1.062-1.061l1.67-1.67-1.67-1.67a.749.749 0 1 1 1.061-1.06l1.67 1.67 1.67-1.67a.749.749 0 1 1 1.06 1.06l-1.67 1.67 1.67 1.67a.75.75 0 0 1-1.06 1.06l-1.67-1.668z"
    />
  </Svg>
);
export default IconlystFilterCloseBulk;
