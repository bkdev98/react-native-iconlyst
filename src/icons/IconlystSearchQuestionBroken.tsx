import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchQuestionBroken = ({
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
      d="M11.592 15.193v.007M11.59 12.995c-.01-.803.72-1.144 1.264-1.454.662-.365 1.11-.946 1.11-1.752a2.15 2.15 0 0 0-2.152-2.155c-1.195 0-2.154.96-2.154 2.155"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.215 11.417a8.418 8.418 0 1 0 .928-3.846M17.36 17.584 20.785 21"
    />
  </Svg>
);
export default IconlystSearchQuestionBroken;
