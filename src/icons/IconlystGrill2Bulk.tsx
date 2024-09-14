import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill2Bulk = ({
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
      d="M4.635 8.045a.5.5 0 0 0-.5.5 7.87 7.87 0 0 0 4.565 7.14l-1.687 5.079a.75.75 0 1 0 1.423.473l.435-1.31h6.195l.435 1.31a.75.75 0 0 0 1.424-.473l-.6-1.807-.012-.033-1.068-3.214a7.87 7.87 0 0 0 4.62-7.165.5.5 0 0 0-.5-.5zm5.48 8.137a7.886 7.886 0 0 0 3.71.014l.742 2.23H9.37z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.632 2.47a.75.75 0 0 1 1.06 0 1.86 1.86 0 0 1 .001 2.632.363.363 0 0 0 0 .513.75.75 0 1 1-1.061 1.06 1.863 1.863 0 0 1 0-2.632.363.363 0 0 0 0-.513.75.75 0 0 1 0-1.06m-2.44 1.572a.75.75 0 0 1 .001 1.061.363.363 0 0 0 0 .514.75.75 0 1 1-1.062 1.06 1.863 1.863 0 0 1 0-2.633.75.75 0 0 1 1.061-.002m5.94.002a.75.75 0 0 1 1.062 1.06.363.363 0 0 0 0 .513.75.75 0 1 1-1.062 1.06 1.863 1.863 0 0 1 0-2.633"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGrill2Bulk;
