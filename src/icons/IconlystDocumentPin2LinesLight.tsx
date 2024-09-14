import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPin2LinesLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.689 20.028H8.237a3.897 3.897 0 0 1-3.897-3.896V6.897A3.897 3.897 0 0 1 8.237 3h6.713a3.897 3.897 0 0 1 3.897 3.897v3.184"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.85 19.115V21m2.18-6.91c.15.377.058.808-.234 1.091 0 0-.46.345-.532.515-.093.218-.105.733 0 .944.107.213.764.572.764.572.398.299.632.768.632 1.265a.64.64 0 0 1-.638.638h-4.346a.64.64 0 0 1-.637-.638c0-.497.234-.966.633-1.265 0 0 .656-.36.762-.572s.093-.726 0-.944c-.072-.17-.532-.515-.532-.515a1.005 1.005 0 0 1 .699-1.724h2.497c.411 0 .78.25.933.632M13.073 9.285H9.188m1.585 4.197H9.189"
    />
  </Svg>
);
export default IconlystDocumentPin2LinesLight;
