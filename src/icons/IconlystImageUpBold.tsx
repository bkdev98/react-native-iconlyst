import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageUpBold = ({
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
      fillRule="evenodd"
      d="M18.83 11.864a2.5 2.5 0 0 1-2.5-2.5v-.896a.33.33 0 0 0-.287-.316 2.47 2.47 0 0 1-1.385-.692 2.5 2.5 0 0 1-.007-3.536l.318-.32a.3.3 0 0 0-.213-.511H7.298c-3.162 0-5.286 2.219-5.286 5.52v6.143a.3.3 0 0 0 .476.243l3.233-2.346a4.95 4.95 0 0 1 6.213.289l2.846 2.553c.1.09.248.102.363.03a31 31 0 0 1 1.755-1.033c1.449-.78 2.671-.49 3.624.056.212.121.49-.024.49-.268v-2.553c0-.31-.518-.483-.772-.306-.4.279-.884.443-1.41.443"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.601 13.866-4.326 3.14-.003.002c-.113.08-.209.197-.194.335.315 2.86 2.319 4.74 5.22 4.74h8.436c1.064 0 2.008-.257 2.795-.72.166-.098.18-.327.036-.456l-7.628-6.844a3.46 3.46 0 0 0-4.336-.197M17.611 15.811c-.424.231-.82.461-1.161.668a.297.297 0 0 0-.043.476l3.26 2.926a.285.285 0 0 0 .432-.05c.517-.797.83-1.773.887-2.893a.3.3 0 0 0-.096-.23c-1.052-.955-1.983-1.592-3.279-.897M21.77 5.159 19.361 2.74a.75.75 0 0 0-1.063 0l-2.408 2.418a.751.751 0 0 0 1.063 1.059l1.127-1.132v4.278a.75.75 0 1 0 1.5 0V5.086l1.126 1.132a.75.75 0 0 0 1.062-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageUpBold;
