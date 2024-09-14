import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftPowerpointBulk = ({
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
      d="M12.77 13.973c0 2.03-1.36 3.44-3.3 3.44H5.743c-.167 0-.259.192-.148.318a8.74 8.74 0 0 0 6.563 2.971c4.426 0 8.116-3.327 8.665-7.67a.197.197 0 0 0-.196-.22h-7.659a.2.2 0 0 0-.2.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.47 15.911c1.11 0 1.8-.74 1.8-1.94v-4.25c0-1.19-.69-1.94-1.8-1.94H4.96c-1.12 0-1.81.75-1.81 1.94v4.25c0 1.2.69 1.94 1.81 1.94z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.25 14.151v-4.36c0-.23.11-.44.28-.58.13-.11.29-.17.47-.17h1.53a2.09 2.09 0 1 1 0 4.18h-.78v.93c0 .42-.33.75-.75.75-.23 0-.43-.1-.57-.27a.73.73 0 0 1-.18-.48m2.28-3.61c.32 0 .59.27.59.59 0 .33-.27.59-.59.59h-.78v-1.18z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.769 11.112c0 .11.09.2.2.2h7.684c.117 0 .209-.1.197-.215-.42-4.128-3.728-7.407-7.857-7.797a.197.197 0 0 0-.214.197v5.965c0 .05 0 .09-.02.13 0 0 .01.01 0 .02.01.04.01.07.01.11zM10.96 6.611c.142.07.32-.028.32-.186V3.514a.196.196 0 0 0-.221-.196 8.63 8.63 0 0 0-5.22 2.641c-.117.125-.027.323.144.323h3.486c.551 0 1.051.115 1.49.33" />
    </G>
  </Svg>
);
export default IconlystMicrosoftPowerpointBulk;
