import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeLight = ({
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
      d="M20.235 15.282V8.718c0-.87-.465-1.675-1.218-2.11l-5.686-3.282a2.43 2.43 0 0 0-2.434 0L5.21 6.608a2.44 2.44 0 0 0-1.217 2.11v6.564c0 .87.464 1.674 1.217 2.109l5.687 3.283a2.43 2.43 0 0 0 2.434 0l5.686-3.283a2.44 2.44 0 0 0 1.218-2.109"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.413 8.496v.048m.19-.037a.196.196 0 1 1-.392 0 .196.196 0 0 1 .391 0M10.606 9.815v6.303M15.153 9.815l-4.54 3.779M15.155 16.118l-3.165-3.606"
    />
  </Svg>
);
export default IconlystKelvinDegreeLight;
