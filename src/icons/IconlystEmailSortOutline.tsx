import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSortOutline = ({
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
      d="M7.677 20.592a4.91 4.91 0 0 1-3.544-1.44 5.8 5.8 0 0 1-1.628-4.157V9.013a5.29 5.29 0 0 1 5.187-5.605h8.557a5.29 5.29 0 0 1 5.187 5.605v1.628a.75.75 0 1 1-1.5 0V9.013c0-2.378-1.551-4.105-3.687-4.105H7.692c-2.136 0-3.687 1.727-3.687 4.105V15a4.3 4.3 0 0 0 1.188 3.094 3.34 3.34 0 0 0 2.5 1h4.017a.75.75 0 1 1 0 1.5H7.677"
    />
    <Path
      fill={props.color}
      d="M17.174 17.11a.75.75 0 0 1-.521-.21l-.94-.907-.94.906a.75.75 0 1 1-1.041-1.079l1.46-1.409a.75.75 0 0 1 1.042 0l1.46 1.41a.75.75 0 0 1-.52 1.29M19.796 20.527a.75.75 0 0 1-.52-.21l-1.462-1.41a.75.75 0 1 1 1.041-1.08l.94.907.94-.907a.75.75 0 0 1 1.041 1.08l-1.46 1.409a.75.75 0 0 1-.52.21"
    />
    <Path
      fill={props.color}
      d="M15.714 20.591a.75.75 0 0 1-.75-.75v-4.89a.75.75 0 0 1 1.5 0v4.894a.75.75 0 0 1-.75.746M19.796 20.527a.75.75 0 0 1-.75-.75v-4.894a.75.75 0 1 1 1.5 0v4.894a.75.75 0 0 1-.75.75M11.993 13.592a2.75 2.75 0 0 1-1.711-.6l-3.908-3.15a.75.75 0 1 1 .942-1.169l3.9 3.148a1.244 1.244 0 0 0 1.555 0l3.867-3.143a.75.75 0 1 1 .946 1.164l-3.869 3.15c-.49.39-1.097.6-1.722.6"
    />
  </Svg>
);
export default IconlystEmailSortOutline;
