import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlusOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.436 1C20.063 1 22.5 3.546 22.5 7.335v8.83c0 3.789-2.437 6.335-6.064 6.335H7.064C3.437 22.5 1 19.954 1 16.165v-8.83C1 3.546 3.437 1 7.064 1zm0 1.5H7.064C4.292 2.5 2.5 4.397 2.5 7.335v8.83C2.5 19.103 4.292 21 7.064 21h9.372C19.209 21 21 19.103 21 16.165v-8.83C21 4.397 19.209 2.5 16.436 2.5M11.75 7.327a.75.75 0 0 1 .75.75v2.913h2.916a.75.75 0 0 1 0 1.5H12.5v2.914a.75.75 0 0 1-1.5 0V12.49H8.084a.75.75 0 1 1 0-1.5H11V8.077a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default IconlystPlusOutline;
