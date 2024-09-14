import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnonymousTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Circle
      cx={9.45}
      cy={8.976}
      r={4.692}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.646 13.951H7.37a4.39 4.39 0 0 0-4.391 4.391l-.002.263c-.013.972.777 1.678 1.75 1.678h9.562c.973 0 1.763-.706 1.75-1.678l-.002-.263a4.39 4.39 0 0 0-4.391-4.39"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.816 13.661v.007M18.815 11.616c-.01-.746.67-1.063 1.174-1.352.617-.339 1.034-.88 1.034-1.63a2 2 0 0 0-2.003-2.003 1.997 1.997 0 0 0-2.002 2.004"
    />
  </Svg>
);
export default IconlystAnonymousTwoTone;
