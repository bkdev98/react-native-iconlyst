import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionVideoBulk = ({
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
      d="m11.466 12.642-.16.09c-.35.2-.49.28-.64.54-.14.25-.39.38-.65.38-.13 0-.25-.03-.37-.09a.753.753 0 0 1-.29-1.02c.36-.64.8-.88 1.22-1.12l.16-.09c.59-.31.59-.73.59-.87 0-.61-.51-1.11-1.12-1.11-.62 0-1.12.5-1.12 1.11 0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-1.43 1.18-2.61 2.62-2.61s2.62 1.18 2.62 2.61c0 .92-.5 1.72-1.36 2.18m-.79 2.51c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-.41.34-.77.75-.77.42 0 .75.31.75.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuestionVideoBulk;
