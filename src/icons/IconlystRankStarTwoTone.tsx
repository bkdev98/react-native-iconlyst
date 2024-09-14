import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRankStarTwoTone = ({
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
      d="M9.676 14.645H5.443c-.781 0-1.415.633-1.415 1.414v3.526c0 .779.637 1.415 1.415 1.415h14.115c.778 0 1.415-.636 1.415-1.415v-1.643c0-.781-.634-1.415-1.415-1.415h-4.234"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.889 3.237.647 1.294a.44.44 0 0 0 .329.236l1.448.208a.429.429 0 0 1 .242.734l-1.048 1.007a.42.42 0 0 0-.126.38l.248 1.421a.435.435 0 0 1-.633.454l-1.294-.67a.44.44 0 0 0-.406 0l-1.295.67a.435.435 0 0 1-.633-.454l.248-1.42a.43.43 0 0 0-.126-.381L9.441 5.71a.43.43 0 0 1 .242-.735l1.449-.208a.44.44 0 0 0 .328-.236l.65-1.294a.439.439 0 0 1 .779 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.324 21v-8c0-.78-.634-1.414-1.415-1.414h-2.818c-.779 0-1.415.636-1.415 1.415v7.998"
    />
  </Svg>
);
export default IconlystRankStarTwoTone;
