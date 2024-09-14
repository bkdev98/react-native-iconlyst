import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointerOutline = ({
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
      d="M4.72 4.47a.75.75 0 0 1 .805-.168l13.999 5.52a.75.75 0 0 1-.008 1.398l-5.826 2.22-2.22 5.826a.75.75 0 0 1-1.398.008L4.552 5.275a.75.75 0 0 1 .168-.805M6.58 6.33l4.177 10.593 1.65-4.333a.75.75 0 0 1 .433-.433l4.333-1.65z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.579 12.329a.75.75 0 0 1 1.06 0l6.142 6.14a.75.75 0 0 1-1.061 1.062l-6.141-6.141a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMousePointerOutline;
