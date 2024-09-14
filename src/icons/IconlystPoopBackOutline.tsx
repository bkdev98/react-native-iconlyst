import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopBackOutline = ({
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
      d="M9.318 11.35a.75.75 0 0 1-.623-.331 3.13 3.13 0 0 1-.52-1.612 3.69 3.69 0 0 1 1.147-2.472l.106-.121a.7.7 0 0 1 .092-.091c1.08-.9 1.554-1.817 1.268-2.45a.75.75 0 0 1 .796-1.077 5.8 5.8 0 0 1 1.516.568l.1.049c2.292 1.115 3.433 2.825 3.21 4.816a4.95 4.95 0 0 1-.743 2.068.749.749 0 1 1-1.268-.8c.279-.433.457-.923.52-1.434.188-1.68-1.188-2.721-2.376-3.3l-.1-.052-.1-.05a4.62 4.62 0 0 1-1.812 2.775l-.08.09a2.47 2.47 0 0 0-.774 1.424c.01.296.103.583.266.83a.749.749 0 0 1-.621 1.17z"
    />
    <Path
      fill={props.color}
      d="M12.539 20.805a45 45 0 0 1-6.143-.355c-2.425-.5-3.909-2.095-3.909-4.173a4.165 4.165 0 0 1 2.642-3.914 4.11 4.11 0 0 1 3.784-4.066.751.751 0 1 1 .091 1.5 2.614 2.614 0 0 0-2.377 2.671q.005.126.024.25v.033a.75.75 0 0 1-.591.907 2.634 2.634 0 0 0-2.076 2.627c0 1.992 2.044 2.568 2.67 2.7 3.793.45 7.626.452 11.42.005a2.885 2.885 0 0 0 2.41-2.7 2.62 2.62 0 0 0-2.08-2.626.75.75 0 0 1-.608-.824q.025-.182.03-.367a2.615 2.615 0 0 0-2.312-2.676.75.75 0 0 1-.614-1.09.74.74 0 0 1 .73-.405 4.117 4.117 0 0 1 3.7 4.052 4.155 4.155 0 0 1 2.659 3.922 4.345 4.345 0 0 1-3.549 4.158 34 34 0 0 1-5.901.371"
    />
    <Path
      fill={props.color}
      d="M7.223 15.67a.75.75 0 0 1-.432-.137 3.78 3.78 0 0 1-1.623-2.6.75.75 0 1 1 1.49-.178 2.25 2.25 0 0 0 1 1.552.75.75 0 0 1-.433 1.363zM17.234 15.67a.751.751 0 0 1-.433-1.363 2.25 2.25 0 0 0 1-1.552.75.75 0 1 1 1.49.178 3.78 3.78 0 0 1-1.623 2.6.75.75 0 0 1-.434.137"
    />
  </Svg>
);
export default IconlystPoopBackOutline;