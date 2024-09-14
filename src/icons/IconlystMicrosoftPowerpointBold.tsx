import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftPowerpointBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.96 7.12c.142.07.32-.028.32-.187v-2.91a.196.196 0 0 0-.221-.197 8.63 8.63 0 0 0-5.22 2.642c-.117.124-.027.323.144.323h3.486c.551 0 1.052.115 1.49.329M12.77 14.48c0 2.03-1.36 3.44-3.3 3.44H5.743c-.167 0-.259.193-.148.32a8.74 8.74 0 0 0 6.563 2.97c4.426 0 8.116-3.326 8.665-7.669a.197.197 0 0 0-.196-.22h-7.659a.2.2 0 0 0-.2.2zM12.77 11.62c0 .111.089.2.2.2h7.683c.117 0 .209-.099.197-.215-.42-4.127-3.728-7.406-7.857-7.796a.197.197 0 0 0-.214.196v5.966c0 .05 0 .09-.02.13 0 0 .01.01 0 .02.01.04.01.07.01.11z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.25 14.66V10.3c0-.23.109-.44.279-.58.13-.11.29-.17.47-.17h1.53a2.09 2.09 0 1 1 0 4.18h-.78v.93c0 .42-.33.75-.75.75-.23 0-.43-.1-.57-.27a.73.73 0 0 1-.18-.48m4.219 1.76c1.11 0 1.8-.74 1.8-1.94v-4.25c0-1.19-.69-1.94-1.8-1.94h-4.51c-1.12 0-1.81.75-1.81 1.94v4.25c0 1.2.69 1.94 1.81 1.94z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.119 11.64c0-.32-.27-.59-.59-.59h-.78v1.18h.78c.32 0 .59-.26.59-.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftPowerpointBold;
