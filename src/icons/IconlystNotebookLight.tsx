import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookLight = ({
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
      d="M16.884 7.05V4.652c0-1.08-1.019-1.87-2.065-1.6L6.086 5.308a1.434 1.434 0 0 0-1.076 1.388v12.16c0 1.184.96 2.144 2.144 2.144h9.693c1.185 0 2.145-.96 2.145-2.145V9.433c0-1.185-.96-2.145-2.145-2.145H5.01M9.525 12.072h2.785m-2.785 3.806h4.948"
    />
  </Svg>
);
export default IconlystNotebookLight;
