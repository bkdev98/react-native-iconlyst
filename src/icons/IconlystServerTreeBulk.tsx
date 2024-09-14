import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTreeBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M19.75 16.24v.038a2.495 2.495 0 0 1 1.75 2.372c0 1.379-1.122 2.5-2.5 2.5a2.503 2.503 0 0 1-2.5-2.5c0-1.115.739-2.051 1.75-2.372v-.038zM17.125 8.833A2.964 2.964 0 0 0 19.8 5.85c0-1.682-1.318-3-3-3H7.5c-1.682 0-3 1.318-3 3a2.964 2.964 0 0 0 2.675 2.983zM4.25 16.24v.038A2.495 2.495 0 0 0 2.5 18.65c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5a2.495 2.495 0 0 0-1.75-2.372v-.038zM11.25 16.24v.038A2.495 2.495 0 0 0 9.5 18.65c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5a2.495 2.495 0 0 0-1.75-2.372v-.038z" />
    </G>
    <Path
      fill={props.color}
      d="M19.75 16.24h-1.5v-1.59c0-.69-.561-1.25-1.25-1.25h-4.25v2.84h-1.5V13.4H7c-.689 0-1.25.56-1.25 1.25v1.59h-1.5v-1.59A2.753 2.753 0 0 1 7 11.9h4.25V8.832h1.5V11.9H17a2.753 2.753 0 0 1 2.75 2.75z"
    />
  </Svg>
);
export default IconlystServerTreeBulk;
