import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot3TwoTone = ({
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
      d="M19.367 11.192q.076.491.076 1.018l.01 4.482c0 2.276-1.418 3.884-3.697 3.884H9.238c-2.277 0-3.695-1.608-3.695-3.884V12.21q0-.527.076-1.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.439 14.016h.918a.97.97 0 0 0 .958-.834l.18-1.364a.586.586 0 0 0-.578-.662H4.083a.585.585 0 0 0-.578.662l.18 1.364a.97.97 0 0 0 .957.834h.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.757 4.683a1.259 1.259 0 1 0-2.517 0 1.259 1.259 0 0 0 2.517 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPot3TwoTone;
