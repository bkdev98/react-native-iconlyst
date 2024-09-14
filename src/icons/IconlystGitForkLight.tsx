import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitForkLight = ({
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
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M8.67 18.77c0 .713 0 1.07.119 1.35a1.5 1.5 0 0 0 .796.796c.28.12.637.12 1.35.12h2.131c.713 0 1.07 0 1.35-.12a1.5 1.5 0 0 0 .796-.796c.12-.28.12-.637.12-1.35v-.274c0-.713 0-1.07-.12-1.35a1.5 1.5 0 0 0-.796-.797c-.28-.119-.637-.119-1.35-.119h-2.131c-.713 0-1.07 0-1.35.12a1.5 1.5 0 0 0-.796.796c-.12.28-.12.636-.12 1.35zM3.51 5.505c0 .713 0 1.069.119 1.35a1.5 1.5 0 0 0 .796.796c.28.119.637.119 1.35.119h2.131c.713 0 1.07 0 1.35-.12a1.5 1.5 0 0 0 .796-.796c.119-.28.119-.636.119-1.35V5.23c0-.713 0-1.07-.119-1.35a1.5 1.5 0 0 0-.796-.796c-.28-.12-.637-.12-1.35-.12H5.775c-.713 0-1.07 0-1.35.12a1.5 1.5 0 0 0-.796.796c-.12.28-.12.637-.12 1.35zM13.83 5.505c0 .713 0 1.069.119 1.35a1.5 1.5 0 0 0 .796.796c.28.119.637.119 1.35.119h2.131c.713 0 1.07 0 1.35-.12a1.5 1.5 0 0 0 .796-.796c.12-.28.12-.636.12-1.35V5.23c0-.713 0-1.07-.12-1.35a1.5 1.5 0 0 0-.796-.796c-.28-.12-.637-.12-1.35-.12h-2.13c-.714 0-1.07 0-1.35.12a1.5 1.5 0 0 0-.797.796c-.119.28-.119.637-.119 1.35z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M17.16 7.762v1.79c0 .855 0 1.283-.143 1.62a1.8 1.8 0 0 1-.955.955c-.337.143-.764.143-1.62.143H9.558c-.855 0-1.283 0-1.62-.143a1.8 1.8 0 0 1-.955-.956c-.143-.336-.143-.764-.143-1.62V7.763"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.191v-3.884"
    />
  </Svg>
);
export default IconlystGitForkLight;
