import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingTwoTone = ({
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
      d="M15.464 18.43a2.09 2.09 0 0 1-2.103 2.079h-7.29a2.09 2.09 0 0 1-2.1-2.08v-5.271c.005-.454.22-.88.582-1.152l3.963-3.181a1.924 1.924 0 0 1 2.386 0l3.98 3.178c.36.273.574.697.582 1.149z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.716 16.723v3.548M18.536 20.402h1.298c1.18 0 2.136-.957 2.136-2.137V5.629c0-1.18-.956-2.137-2.136-2.137H14.61c-1.173 0-2.124.95-2.124 2.124v.879M18.737 16.258v.01M18.737 12.045v-.01M15.678 7.813v.01M18.737 7.813v.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBuildingTwoTone;
