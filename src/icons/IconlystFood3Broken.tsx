import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood3Broken = ({
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
      d="M12 20.955h7.176c.804 0 1.518-.514 1.772-1.276a1.002 1.002 0 0 0-.95-1.32H4.002c-.684 0-1.167.67-.95 1.32a1.87 1.87 0 0 0 1.77 1.276h3.589M13.322 9.466V8.335a1.323 1.323 0 1 0-2.644 0v1.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.264 18.356-.041-.829C4 13.08 7.547 9.352 12 9.352a7.75 7.75 0 0 1 3.666.914M19.737 18.358l.042-.829c.1-2-.563-3.855-1.727-5.29M18.024 5.355a1.195 1.195 0 0 0 0 1.69M3.674 7.047a1.194 1.194 0 0 1 0 1.69M8.135 3.047a1.194 1.194 0 0 1 0 1.69 1.194 1.194 0 0 0 0 1.69"
    />
  </Svg>
);
export default IconlystFood3Broken;
