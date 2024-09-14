import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidTwoTone = ({
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
      d="m4.287 17.091 7.145 3.572a2.39 2.39 0 0 0 2.136 0l7.145-3.572a1.423 1.423 0 0 0 .547-2.062L13.685 3.664a1.423 1.423 0 0 0-2.368 0L3.739 15.029a1.423 1.423 0 0 0 .548 2.062"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3.118V20.97"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPyramidTwoTone;
