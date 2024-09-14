import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBubblesTwoTone = ({
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
      d="M16.068 12.624a4.812 4.812 0 1 0 0-9.624 4.812 4.812 0 0 0 0 9.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.836 17.404a3.487 3.487 0 1 0 0-6.975 3.487 3.487 0 0 0 0 6.975M15.838 21a2.813 2.813 0 1 0 0-5.625 2.813 2.813 0 0 0 0 5.625"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBubblesTwoTone;
