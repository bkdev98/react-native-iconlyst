import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardKeyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.798V8.504c0-2.442-1.52-4.166-3.965-4.166H6.965C4.528 4.338 3 6.062 3 8.504v6.587c0 2.442 1.521 4.168 3.965 4.168h2.942M3 9.635h18M14.319 14.835l.01.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.628 18.776-2.848-2.85c.048-.217.08-.436.08-.668a3.136 3.136 0 1 0-2.17 2.985l.645.644h.75v1.144h1.162v.743c0 .21.17.381.381.381h1.73c.211 0 .382-.17.382-.38v-1.73a.38.38 0 0 0-.112-.27"
    />
  </Svg>
);
export default IconlystCardKeyLight;
