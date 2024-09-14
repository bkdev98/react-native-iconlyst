import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockCheckOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.702 11.157a.75.75 0 0 1-.75-.75v-2.1a3.67 3.67 0 0 0-1.116-2.593 3.56 3.56 0 0 0-2.628-1.05A3.68 3.68 0 0 0 8.555 8.3v2.1a.75.75 0 0 1-1.5 0V8.283a5.177 5.177 0 0 1 5.134-5.123h.067a5.2 5.2 0 0 1 5.2 5.135v2.1a.75.75 0 0 1-.754.762M11.374 18.527c-.2 0-.39-.08-.53-.22l-1.66-1.662a.75.75 0 0 1 1.062-1.06l1.128 1.13 2.887-2.887a.75.75 0 0 1 1.06 1.06l-3.417 3.419a.75.75 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      d="M14.95 22.714h-5.4a7.74 7.74 0 0 1-3.334-.37 3.77 3.77 0 0 1-1.756-1.756 7.74 7.74 0 0 1-.37-3.334v-2.132a7.7 7.7 0 0 1 .37-3.334 3.77 3.77 0 0 1 1.756-1.756 7.74 7.74 0 0 1 3.334-.37h5.4a7.74 7.74 0 0 1 3.334.37c.768.37 1.387.99 1.756 1.758a7.7 7.7 0 0 1 .37 3.332v2.13a7.74 7.74 0 0 1-.37 3.333 3.77 3.77 0 0 1-1.756 1.756 7.74 7.74 0 0 1-3.334.373m-5.4-11.552a7.4 7.4 0 0 0-2.684.222c-.46.222-.832.594-1.054 1.054a7.4 7.4 0 0 0-.222 2.684v2.13c-.091.9-.016 1.81.222 2.683.222.46.594.832 1.054 1.054a7.4 7.4 0 0 0 2.684.222h5.4c.9.091 1.81.016 2.684-.222.46-.222.832-.594 1.054-1.054a7.4 7.4 0 0 0 .222-2.684V15.12c.091-.9.016-1.81-.222-2.682a2.25 2.25 0 0 0-1.054-1.056 7.4 7.4 0 0 0-2.684-.222z"
    />
  </Svg>
);
export default IconlystLockCheckOutline;
