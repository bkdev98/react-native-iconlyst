import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFiverrOutline = ({
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
      d="M6.68 8.1c.166-3.473 2.402-5.85 5.19-5.85h2.91a1.2 1.2 0 0 1 1.2 1.2V5.7a1.2 1.2 0 0 1-1.2 1.2h-1.849c-.369 0-.56.132-.673.265a.88.88 0 0 0-.194.541V8.1h6.473a1.2 1.2 0 0 1 1.2 1.2v11.25a1.2 1.2 0 0 1-1.2 1.2h-2.696a1.2 1.2 0 0 1-1.2-1.2v-7.8h-2.577v7.8a1.2 1.2 0 0 1-1.2 1.2h-2.7a1.2 1.2 0 0 1-1.2-1.2v-7.8h-1.5a1.2 1.2 0 0 1-1.2-1.2V9.3a1.2 1.2 0 0 1 1.2-1.2zm5.19-4.35c-1.908 0-3.825 1.778-3.694 5.07a.75.75 0 0 1-.75.78H5.764v1.65h1.95a.75.75 0 0 1 .75.75v8.25h2.1V12a.75.75 0 0 1 .75-.75h4.077a.75.75 0 0 1 .75.75v8.25h2.096V9.6h-6.923a.75.75 0 0 1-.75-.75V7.706c0-.482.161-1.049.547-1.507.405-.481 1.021-.799 1.82-.799h1.55V3.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFiverrOutline;
