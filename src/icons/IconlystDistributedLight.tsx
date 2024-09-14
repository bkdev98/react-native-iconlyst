import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDistributedLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 13.769C8 15.075 8.817 16 10.127 16h3.749c1.31 0 2.123-.925 2.123-2.231v-3.533C16 8.926 15.187 8 13.876 8h-3.748C8.82 8 8 8.926 8 10.236z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.38 10.549c-.473 0-.81.296-.81.772v1.36c0 .476.337.77.81.77h1.282c.476 0 .812-.294.812-.77v-1.36c0-.474-.336-.772-.812-.772zM10.386 8V6M13.614 16v2M13.614 8V3M10.386 16v5M15.999 12h2.693"
    />
    <Circle
      cx={19.846}
      cy={12.001}
      r={1.154}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(-90 19.846 12)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 12H5.308"
    />
    <Circle
      cx={4.154}
      cy={11.999}
      r={1.154}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 4.154 12)"
    />
  </Svg>
);
export default IconlystDistributedLight;
