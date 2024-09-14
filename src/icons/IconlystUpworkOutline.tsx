import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpworkOutline = ({
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
      d="M9.608 4.514a.75.75 0 0 1 .838.457q.125.312.261.662c.443 1.13.994 2.536 1.704 3.861.398-1.915 1.98-3.869 4.652-3.869 2.558 0 4.687 2.129 4.687 4.688S19.621 15 17.063 15c-1.542 0-2.803-.734-3.825-1.76l-.838 4.453-.225 1.196-.738-.139-.736-.14.225-1.195 1.071-5.7a15 15 0 0 1-.335-.515c-.434-.7-.82-1.446-1.162-2.179v1.854C10.5 13.127 8.627 15 6.375 15S2.25 13.127 2.25 10.875V5.25a.75.75 0 0 1 1.5 0v5.625c0 1.424 1.201 2.625 2.625 2.625S9 12.299 9 10.875V5.25a.75.75 0 0 1 .608-.736m1.83 14.236-.738-.14a.75.75 0 1 0 1.475.279zm2.151-7.389c1.003 1.315 2.149 2.139 3.473 2.139 1.73 0 3.188-1.457 3.188-3.187s-1.457-3.188-3.187-3.188c-1.833 0-2.941 1.337-3.2 2.76z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpworkOutline;
