import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirtableTwoTone = ({
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
      d="M11.252 3.145a2 2 0 0 1 1.494 0l7.655 3.078a.2.2 0 0 1 0 .372l-7.655 3.078a2 2 0 0 1-1.494 0L3.597 6.595a.2.2 0 0 1 0-.372z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.834 17.856a.5.5 0 0 1-.683-.465v-6.805a.5.5 0 0 1 .683-.465l6.497 2.547a.5.5 0 0 1 .318.466v1.707a.5.5 0 0 1-.318.465zM14.041 20.961a.5.5 0 0 1-.69-.462v-7.314a.5.5 0 0 1 .315-.464l6.498-2.595a.5.5 0 0 1 .685.464v7.228a.5.5 0 0 1-.309.462z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirtableTwoTone;
