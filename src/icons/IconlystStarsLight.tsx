import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.61 11.388 1.012 2.022c.1.2.292.337.513.368l2.264.326a.67.67 0 0 1 .377 1.147l-1.637 1.573a.66.66 0 0 0-.196.595l.388 2.221a.68.68 0 0 1-.99.71L12.317 19.3a.7.7 0 0 0-.636 0L9.66 20.35a.679.679 0 0 1-.99-.709l.387-2.22a.66.66 0 0 0-.196-.596l-1.638-1.573a.67.67 0 0 1 .376-1.147l2.264-.325a.68.68 0 0 0 .514-.369l1.013-2.022a.687.687 0 0 1 1.22 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.164 11.557.498-.99a.686.686 0 0 1 1.217 0l1.012 2.021c.1.2.293.337.514.368l2.263.326a.67.67 0 0 1 .377 1.147l-1.637 1.572a.67.67 0 0 0-.196.596l.388 2.221a.68.68 0 0 1-.99.71l-1.161-.603M14.545 8.148l.762-.75m-5.943.79-.675-.83zm2.604-1.714.018-1.07zM8.836 11.557l-.498-.99a.686.686 0 0 0-1.217 0l-1.012 2.021a.68.68 0 0 1-.514.368l-2.263.326a.67.67 0 0 0-.377 1.147l1.637 1.572c.16.154.234.377.195.596L4.4 18.818a.68.68 0 0 0 .99.71l1.161-.603"
    />
  </Svg>
);
export default IconlystStarsLight;
