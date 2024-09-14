import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnOutline = ({
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
      d="M13.76 14.846a.75.75 0 0 1-.75-.75V9.472a.75.75 0 0 1 1.349-.454l2.057 2.713V9.342a.75.75 0 0 1 1.5 0v4.62a.749.749 0 0 1-1.347.454l-2.058-2.714v2.394a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.959 8.597c1.675 0 2.875 1.5 2.875 3.155 0 1.656-1.2 3.156-2.875 3.156s-2.876-1.5-2.876-3.156c0-1.655 1.201-3.155 2.876-3.155m1.375 3.155c0-1.006-.698-1.655-1.375-1.655-.678 0-1.376.65-1.376 1.655 0 1.007.698 1.656 1.376 1.656s1.375-.649 1.375-1.656"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.629 4.304c.912-.98 2.21-1.526 3.74-1.526h11.26c1.533 0 2.832.546 3.745 1.526.907.974 1.376 2.316 1.376 3.816v7.26c0 1.5-.47 2.842-1.376 3.816-.913.98-2.213 1.526-3.745 1.526H6.369c-1.532 0-2.83-.546-3.744-1.526-.906-.974-1.375-2.316-1.375-3.816V8.12c0-1.5.471-2.843 1.379-3.816m1.097 1.022c-.606.65-.976 1.605-.976 2.794v7.26c0 1.19.37 2.145.973 2.794.599.643 1.485 1.048 2.646 1.048h11.26c1.162 0 2.048-.405 2.647-1.048.605-.65.974-1.604.974-2.794V8.12c0-1.19-.37-2.144-.974-2.794-.6-.643-1.485-1.048-2.646-1.048H6.37c-1.158 0-2.044.404-2.644 1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOnOutline;
