import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet2Bulk = ({
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
      fill={props.color}
      d="M15.629 3.35c2.76 0 4.615 1.936 4.615 4.819v9.36c0 2.883-1.854 4.82-4.614 4.82H8.37c-2.762 0-4.616-1.937-4.616-4.82V8.17c0-2.883 1.854-4.82 4.616-4.82z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.38 11.136-.717 5.271a3.796 3.796 0 0 1-3.745 3.272 3.79 3.79 0 0 1-3.745-3.272l-.718-5.27a4.504 4.504 0 0 1 7.858-3.564 4.5 4.5 0 0 1 1.068 3.563m-5.53-.888a1.151 1.151 0 0 1 2.3 0c0 .635-.516 1.151-1.15 1.151s-1.15-.516-1.15-1.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M3.755 10.607h2.466a.75.75 0 0 0 0-1.5H3.755zM3.755 13.604H6.21a.75.75 0 0 0 0-1.5H3.755zM3.755 16.602h2.487a.75.75 0 1 0 0-1.5H3.755zM20.245 15.102v1.5h-2.492a.75.75 0 1 1 0-1.5zM20.245 12.104v1.5h-2.46a.75.75 0 0 1 0-1.5zM20.245 9.107v1.5h-2.472a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default IconlystToilet2Bulk;
