import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurvedStandOutline = ({
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
      d="M2.519 6c0-2.07 1.68-3.75 3.75-3.75h11.962A3.75 3.75 0 0 1 21.981 6v7.485a3.75 3.75 0 0 1-3.75 3.752H6.27a3.75 3.75 0 0 1-3.751-3.752zm3.75-2.25A2.25 2.25 0 0 0 4.02 6v7.485a2.25 2.25 0 0 0 2.25 2.252h11.962a2.25 2.25 0 0 0 2.25-2.252V6a2.25 2.25 0 0 0-2.25-2.25zM12.252 20.856c-2.22 0-4.406.292-6.039.854a.75.75 0 0 1-.488-1.418c1.837-.632 4.2-.937 6.527-.937s4.69.305 6.527.937a.75.75 0 0 1-.488 1.418c-1.633-.562-3.818-.855-6.039-.855"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurvedStandOutline;
