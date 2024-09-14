import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCutTweezersTwoTone = ({
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
      d="M7.719 9.696a2.348 2.348 0 1 0 0-4.696 2.348 2.348 0 0 0 0 4.695M7.719 14.305a2.348 2.348 0 1 1 0 4.695 2.348 2.348 0 0 1 0-4.695"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.298 17.842 9.551 8.805M19.298 6.156l-9.747 9.037"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCutTweezersTwoTone;
