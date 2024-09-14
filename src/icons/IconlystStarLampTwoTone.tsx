import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLampTwoTone = ({
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
      d="m11.03 17.246-.908 4.004a.5.5 0 0 0 .487.615h2.783a.5.5 0 0 0 .486-.615l-.901-4.009"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.001 3.973 1.66 3.317c.164.327.48.552.842.603l3.713.534a1.1 1.1 0 0 1 .62 1.882l-2.686 2.58a1.09 1.09 0 0 0-.322.977l.636 3.643a1.115 1.115 0 0 1-1.623 1.162l-3.318-1.72a1.13 1.13 0 0 0-1.042 0l-3.32 1.72A1.115 1.115 0 0 1 6.54 17.51l.636-3.644a1.09 1.09 0 0 0-.322-.976l-2.688-2.58a1.1 1.1 0 0 1 .62-1.882l3.713-.534c.362-.051.677-.276.842-.603l1.663-3.318a1.125 1.125 0 0 1 1.998 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarLampTwoTone;
