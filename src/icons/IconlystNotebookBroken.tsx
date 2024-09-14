import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.134 7.05V4.652c0-1.08-1.018-1.87-2.064-1.6L6.335 5.308A1.434 1.434 0 0 0 5.26 6.696v.592m0 0v11.567c0 1.185.96 2.145 2.145 2.145h9.692c1.186 0 2.145-.96 2.145-2.145V9.433c0-1.185-.96-2.145-2.145-2.145zM9.775 12.072h2.785m-2.785 3.806h4.948"
    />
  </Svg>
);
export default IconlystNotebookBroken;
