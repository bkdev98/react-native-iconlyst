import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInputLight = ({
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
      strokeWidth={1.5}
      d="M4.988 4.547v14.906M3 4.547h3.975M3 19.453h3.975"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.201 10.642-.157.426a5.87 5.87 0 0 1-3.463 3.468l-.426.158.426.157a5.87 5.87 0 0 1 3.463 3.469l.157.426.158-.426a5.87 5.87 0 0 1 3.463-3.469l.425-.157-.425-.158a5.87 5.87 0 0 1-3.463-3.468zM18.853 5.464a3.23 3.23 0 0 1-2.147 2.15 3.23 3.23 0 0 1 2.147 2.15A3.23 3.23 0 0 1 21 7.614a3.23 3.23 0 0 1-2.147-2.15"
    />
  </Svg>
);
export default IconlystInputLight;
