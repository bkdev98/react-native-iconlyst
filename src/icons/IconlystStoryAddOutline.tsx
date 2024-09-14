import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoryAddOutline = ({
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
      d="M4.86 7.385a.751.751 0 0 1-.6-1.2 9.8 9.8 0 0 1 1.573-1.68.75.75 0 0 1 .968 1.146c-.498.42-.945.898-1.332 1.423a.75.75 0 0 1-.609.311M3.11 13.33a.75.75 0 0 1-.747-.696 9.7 9.7 0 0 1 .324-3.286.75.75 0 1 1 1.447.4 8.2 8.2 0 0 0-.275 2.78.75.75 0 0 1-.749.801M6.934 20.113a.75.75 0 0 1-.426-.133 9.76 9.76 0 0 1-3.38-4.1.75.75 0 0 1 1.372-.606 8.27 8.27 0 0 0 2.86 3.468.75.75 0 0 1-.426 1.367zM12.091 21.75c-.718 0-1.433-.08-2.134-.24a.75.75 0 0 1 .331-1.463 8.25 8.25 0 0 0 6.9-1.552.748.748 0 0 1 1.206.68.75.75 0 0 1-.282.5 9.7 9.7 0 0 1-6.02 2.074M12.085 15.619a.75.75 0 0 1-.75-.75v-2.114H9.22a.75.75 0 0 1 0-1.5h2.114V9.14a.75.75 0 1 1 1.5 0v2.114h2.117a.75.75 0 0 1 0 1.5h-2.114v2.114a.75.75 0 0 1-.753.75M19.728 17.476a.75.75 0 0 1-.638-1.145 8.2 8.2 0 0 0 1.235-4.637 8.276 8.276 0 0 0-8.57-7.936.751.751 0 0 1-.059-1.5 9.735 9.735 0 0 1 8.67 14.862.75.75 0 0 1-.638.356"
    />
  </Svg>
);
export default IconlystStoryAddOutline;
