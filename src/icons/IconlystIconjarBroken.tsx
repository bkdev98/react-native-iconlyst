import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconjarBroken = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.212 21a2.466 2.466 0 0 0 2.424-2.006c.178-.937.405-1.865.56-2.804.157-.943-.055-1.739-.755-2.393-.488-.455-.544-1.16-.063-1.624.268-.26.454-.596.443-.969a1.18 1.18 0 0 0-1.182-1.148h-.872c-.88 0-1.65.626-1.8 1.492-.264 1.526 1.07 2.85.703 4.385-.19.796-.94 1.273-1.738 1.218a1.74 1.74 0 0 1-1.265-.679"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.073 12.933c.045-.597.018-1.252-.176-1.815a1.57 1.57 0 0 0-1.502-1.061H7.86c-.64 0-1.163.508-1.182 1.148-.01.372.175.71.444.969.48.463.424 1.168-.063 1.624-.7.654-.913 1.45-.756 2.392.155.94.382 1.867.561 2.804a2.466 2.466 0 0 0 2.424 2.007h3.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.907 10.056c.632-.068 1.274-.497 1.119-1.304-.3-1.147-1.925-1.543-2.967-1.68a.468.468 0 0 1-.35-.702 2.2 2.2 0 0 0 .203-1.764 2.24 2.24 0 0 0-1.553-1.524 2.264 2.264 0 0 0-2.876 2.186c0 .402.11.777.3 1.102a.47.47 0 0 1-.342.707c-1.054.143-2.712.547-2.974 1.675-.156.807.486 1.236 1.119 1.304"
    />
  </Svg>
);
export default IconlystIconjarBroken;
