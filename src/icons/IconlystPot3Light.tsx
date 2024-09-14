import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot3Light = ({
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
      d="M8.738 20.576c-2.277 0-3.695-1.608-3.695-3.884V12.21c0-3.838 3.112-6.267 6.95-6.267s6.95 2.429 6.95 6.267l.01 4.482c0 2.276-1.418 3.884-3.697 3.884z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.939 14.016h.918a.97.97 0 0 0 .958-.834l.18-1.364a.586.586 0 0 0-.578-.662H3.583a.585.585 0 0 0-.578.662l.18 1.364a.97.97 0 0 0 .957.834h.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.257 4.683a1.259 1.259 0 1 0-2.517 0 1.259 1.259 0 0 0 2.517 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPot3Light;
