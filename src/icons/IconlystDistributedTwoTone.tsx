import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDistributedTwoTone = ({
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
      d="M8.5 13.769c0 1.306.817 2.231 2.127 2.231h3.749c1.31 0 2.123-.925 2.123-2.231v-3.533C16.5 8.926 15.687 8 14.376 8h-3.748C9.32 8 8.5 8.926 8.5 10.236z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.88 10.549c-.473 0-.81.296-.81.772v1.36c0 .476.337.77.81.77h1.282c.476 0 .812-.294.812-.77v-1.36c0-.474-.336-.772-.812-.772zM10.886 8V6M14.114 16v2M14.114 8V3M10.886 16v5M16.499 12h2.693"
      opacity={0.4}
    />
    <Circle
      cx={20.346}
      cy={12.001}
      r={1.154}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(-90 20.346 12)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 12H5.808"
      opacity={0.4}
    />
    <Circle
      cx={4.654}
      cy={11.999}
      r={1.154}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 4.654 12)"
    />
  </Svg>
);
export default IconlystDistributedTwoTone;
