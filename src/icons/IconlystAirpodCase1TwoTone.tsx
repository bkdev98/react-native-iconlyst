import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase1TwoTone = ({
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
      d="M20.184 11.92a1.64 1.64 0 0 0-1.639-1.639H7.14a1.64 1.64 0 0 0-1.64 1.64v5.015A4.064 4.064 0 0 0 9.563 21h6.558a4.063 4.063 0 0 0 4.063-4.064z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.67 10.282V5.81c0-1.539-1.494-2.876-3.04-2.806a2.65 2.65 0 0 0-1.99 1.06 1.37 1.37 0 0 0-.261.815V6.4c0 .286.088.573.26.808a2.86 2.86 0 0 0 2.269 1.12h.73v1.955M16.04 10.282V8.328h.739c.912 0 1.755-.443 2.267-1.121.174-.235.26-.522.26-.808V4.88c0-.295-.086-.582-.26-.817a2.66 2.66 0 0 0-1.998-1.06c-1.538-.07-3.032 1.268-3.032 2.807v4.473"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.843 17.394v.048m.195-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
    />
  </Svg>
);
export default IconlystAirpodCase1TwoTone;
