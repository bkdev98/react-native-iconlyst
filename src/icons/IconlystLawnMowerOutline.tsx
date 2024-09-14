import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLawnMowerOutline = ({
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
      fillRule="evenodd"
      d="M4.973 17.746a3.657 3.657 0 1 1 7.313.001 3.657 3.657 0 0 1-7.313 0M8.63 15.59a2.157 2.157 0 1 0-.001 4.313 2.157 2.157 0 0 0 0-4.313"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 3.348a.75.75 0 0 1 .75-.75h1.862a.75.75 0 0 1 .728.57l2.865 11.566a.75.75 0 1 1-1.456.36L4.525 4.099H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.698 6.72a.75.75 0 0 1-.31 1.015L4.38 8.8a.395.395 0 0 0-.176.508l2.713 6.198a.75.75 0 1 1-1.374.601L2.83 9.912a1.895 1.895 0 0 1 .847-2.435L5.684 6.41a.75.75 0 0 1 1.014.31M16.531 18.668a2.734 2.734 0 1 1 5.469 0 2.734 2.734 0 0 1-5.469 0m2.735-1.234a1.234 1.234 0 1 0-.001 2.468 1.234 1.234 0 0 0 .001-2.468M13.924 15.098a.75.75 0 0 1 .75-.75h1.274a.75.75 0 1 1 0 1.5h-1.274a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.785 18.281a.75.75 0 0 1 .75-.75h5.746a.75.75 0 0 1 0 1.5h-5.746a.75.75 0 0 1-.75-.75M6.057 9.959a.75.75 0 0 1 .897-.567l12.299 2.767a2.51 2.51 0 0 1 1.942 2.675l-.203 2.186a.75.75 0 0 1-1.494-.139l.203-2.184a1.01 1.01 0 0 0-.78-1.075L6.624 10.855a.75.75 0 0 1-.567-.896M10.33 7.711a.75.75 0 0 1 .896-.565l6.696 1.52a.75.75 0 0 1-.332 1.462l-6.695-1.52a.75.75 0 0 1-.566-.897"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLawnMowerOutline;
