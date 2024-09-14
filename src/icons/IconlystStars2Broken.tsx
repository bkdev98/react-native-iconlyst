import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStars2Broken = ({
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
      d="M4.198 19.779a.495.495 0 0 0 .718.513l1.468-.76a.5.5 0 0 1 .46 0l1.467.76c.096.05.204.068.31.05a.493.493 0 0 0 .408-.564l-.281-1.61a.48.48 0 0 1 .142-.433l1.188-1.141a.487.487 0 0 0-.273-.832l-1.643-.237a.5.5 0 0 1-.372-.266l-.734-1.467a.496.496 0 0 0-.883 0l-.736 1.468a.5.5 0 0 1-.373.266l-1.641.236a.487.487 0 0 0-.275.832l1.189 1.141M19.664 17.735l1.188-1.141a.488.488 0 0 0-.274-.832l-1.642-.237a.5.5 0 0 1-.373-.266l-.734-1.467a.496.496 0 0 0-.883 0l-.736 1.468a.5.5 0 0 1-.372.266l-1.642.236a.486.486 0 0 0-.274.832l1.19 1.141c.116.112.17.274.141.432l-.28 1.611a.493.493 0 0 0 .718.514l1.466-.76a.5.5 0 0 1 .46 0l1.468.76a.493.493 0 0 0 .718-.515M9.585 11.738a.492.492 0 0 0 .718.514l1.467-.762a.5.5 0 0 1 .461 0l1.467.761a.493.493 0 0 0 .718-.514l-.28-1.61a.48.48 0 0 1 .141-.433l1.188-1.141a.487.487 0 0 0-.274-.832l-1.642-.237a.5.5 0 0 1-.373-.266l-.733-1.467a.498.498 0 0 0-.884 0l-.735 1.468a.5.5 0 0 1-.373.266l-1.642.236a.488.488 0 0 0-.274.833l1.189 1.14"
    />
  </Svg>
);
export default IconlystStars2Broken;
