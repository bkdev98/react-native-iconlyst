import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFridgeTwoTone = ({
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
      d="M9.3 3h6.4c1.694 0 2.747 1.196 2.747 2.888v12.224c0 1.692-1.053 2.888-2.748 2.888h-6.4c-1.693 0-2.746-1.196-2.746-2.888V5.888C6.553 4.196 7.61 3 9.299 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.541 7.474h-1.76M15.541 12.498h-1.76M6.553 9.987h11.895"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFridgeTwoTone;
