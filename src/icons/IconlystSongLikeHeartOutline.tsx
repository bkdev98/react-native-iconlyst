import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLikeHeartOutline = ({
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
      d="M12.241 21.75a9.75 9.75 0 1 1 9.75-9.75.75.75 0 1 1-1.5 0 8.25 8.25 0 1 0-8.25 8.25.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M18.508 21.529a.75.75 0 0 1-.36-.091c-.243-.133-2.406-1.354-2.978-3.132a2.58 2.58 0 0 1 1.547-3.333 2.5 2.5 0 0 1 1.793.11 2.5 2.5 0 0 1 1.782-.112 2.58 2.58 0 0 1 1.555 3.335c-.554 1.758-2.732 3-2.978 3.13a.74.74 0 0 1-.361.093m-1.91-3.681a4.8 4.8 0 0 0 1.909 2.054 4.8 4.8 0 0 0 1.91-2.052 1.1 1.1 0 0 0-.58-1.45.99.99 0 0 0-.882.152.75.75 0 0 1-.9 0 .99.99 0 0 0-.883-.15 1.1 1.1 0 0 0-.577 1.449zM10.978 16.81q-.174 0-.348-.021a2.853 2.853 0 1 1 .348.02m-.007-4.205a1.353 1.353 0 1 0 1.344 1.516 1.35 1.35 0 0 0-1.18-1.5 1 1 0 0 0-.164-.016"
    />
    <Path
      fill={props.color}
      d="M13.062 14.958q-.045.001-.091-.005a.75.75 0 0 1-.655-.835l.756-6.266a.75.75 0 0 1 1.472-.093 2.18 2.18 0 0 0 1.3 1.42.75.75 0 1 1-.472 1.424 3.3 3.3 0 0 1-1.054-.58l-.516 4.275a.75.75 0 0 1-.74.66"
    />
  </Svg>
);
export default IconlystSongLikeHeartOutline;
