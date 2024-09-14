import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpLineOutline = ({
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
      d="M11.25 10.296V19a.75.75 0 1 0 1.5 0v-8.71l3.058 3.07a.75.75 0 0 0 1.063-1.058l-4.335-4.354a.75.75 0 0 0-.532-.22h-.003a.75.75 0 0 0-.572.264l-4.296 4.31a.75.75 0 0 0 1.062 1.059zM5.988 5a.75.75 0 0 1 .75-.75h10.525a.75.75 0 0 1 0 1.5H6.738a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpLineOutline;
