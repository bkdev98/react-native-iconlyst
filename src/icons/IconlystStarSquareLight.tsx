import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarSquareLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.916h8.435C19.165 3.916 21 5.997 21 8.942v7.948c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.916 3 19.835 3 16.89V8.942c0-2.945 1.843-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.533 9.128.884 1.767a.6.6 0 0 0 .448.32l1.978.285a.586.586 0 0 1 .33 1.002l-1.43 1.374a.58.58 0 0 0-.172.52l.339 1.94a.594.594 0 0 1-.865.62l-1.767-.916a.6.6 0 0 0-.554 0l-1.768.916a.593.593 0 0 1-.864-.619l.338-1.94a.58.58 0 0 0-.17-.52l-1.432-1.374a.586.586 0 0 1 .33-1.002l1.977-.285a.6.6 0 0 0 .449-.32l.885-1.768a.6.6 0 0 1 1.064 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarSquareLight;
