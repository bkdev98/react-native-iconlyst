import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRecordVideoBulk = ({
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
      d="M6.516 4.25h6.79c2.603 0 4.352 1.828 4.352 4.55v6.4c0 2.722-1.749 4.55-4.353 4.55H6.516c-2.602 0-4.35-1.828-4.35-4.55V8.8c0-2.722 1.748-4.55 4.35-4.55"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M20.576 6.81a1.796 1.796 0 0 1 2.52.25c.264.318.407.724.406 1.14l-.012 7.597a1.797 1.797 0 0 1-1.794 1.79c-.415 0-.818-.144-1.134-.405l-1.214-.998a1.03 1.03 0 0 1-.358-.864q.003-.06.003-.123v-6.4q0-.06-.003-.116c-.016-.333.102-.656.36-.867z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.635 12.003c0 1.78 1.45 3.24 3.24 3.24 1.78 0 3.23-1.46 3.23-3.24a3.235 3.235 0 0 0-6.47 0m3.24 1.74c.95 0 1.73-.78 1.73-1.74s-.78-1.73-1.73-1.73c-.96 0-1.74.77-1.74 1.73s.78 1.74 1.74 1.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRecordVideoBulk;
