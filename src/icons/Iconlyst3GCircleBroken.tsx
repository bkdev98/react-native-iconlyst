import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3GCircleBroken = ({
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
      d="M16.65 9.662a2.6 2.6 0 0 0-1.025-.267c-1.365-.068-2.495 1.108-2.552 2.474-.062 1.501.935 2.742 2.42 2.742.87 0 1.49-.31 1.49-1.18V12h-1.49M8.075 14.131a1.605 1.605 0 1 0 1.135-2.739l1.61-1.994h-2.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21a9 9 0 1 1 3.969-.92"
    />
  </Svg>
);
export default Iconlyst3GCircleBroken;
