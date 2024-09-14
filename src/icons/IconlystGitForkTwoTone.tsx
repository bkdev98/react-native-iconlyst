import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitForkTwoTone = ({
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
      strokeWidth={1.5}
      d="M19.271 8.668c.713 0 1.07 0 1.35.119a1.5 1.5 0 0 1 .796.796c.12.28.12.637.12 1.35v2.131c0 .713 0 1.07-.12 1.35a1.5 1.5 0 0 1-.796.796c-.28.12-.637.12-1.35.12h-.274c-.713 0-1.07 0-1.35-.12a1.5 1.5 0 0 1-.797-.796c-.119-.28-.119-.637-.119-1.35v-2.131c0-.713 0-1.07.12-1.35a1.5 1.5 0 0 1 .796-.796c.28-.119.637-.119 1.35-.119zM6.004 3.508c.713 0 1.07 0 1.35.119a1.5 1.5 0 0 1 .796.796c.119.28.119.637.119 1.35v2.131c0 .713 0 1.07-.12 1.35a1.5 1.5 0 0 1-.796.796c-.28.119-.636.119-1.35.119H5.73c-.713 0-1.07 0-1.35-.119a1.5 1.5 0 0 1-.796-.796c-.12-.28-.12-.637-.12-1.35V5.773c0-.713 0-1.07.12-1.35a1.5 1.5 0 0 1 .796-.796c.28-.12.637-.12 1.35-.12zM6.004 13.828c.713 0 1.07 0 1.35.119a1.5 1.5 0 0 1 .796.796c.119.28.119.637.119 1.35v2.131c0 .713 0 1.07-.12 1.35a1.5 1.5 0 0 1-.796.797c-.28.118-.636.118-1.35.118H5.73c-.713 0-1.07 0-1.35-.118a1.5 1.5 0 0 1-.796-.797c-.12-.28-.12-.637-.12-1.35v-2.13c0-.714 0-1.07.12-1.35a1.5 1.5 0 0 1 .796-.797c.28-.119.637-.119 1.35-.119z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M8.264 17.16h1.79c.855 0 1.283 0 1.62-.143a1.8 1.8 0 0 0 .955-.955c.143-.337.143-.764.143-1.62V9.558c0-.855 0-1.283-.143-1.62a1.8 1.8 0 0 0-.956-.955c-.336-.143-.764-.143-1.62-.143H8.265"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.69 12h-3.885"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGitForkTwoTone;
