import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood1Broken = ({
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
      d="M12 18.612h7.176c.804 0 1.518-.515 1.772-1.277a1.002 1.002 0 0 0-.95-1.32H4.002c-.684 0-1.167.671-.95 1.32a1.87 1.87 0 0 0 1.77 1.276h3.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.264 16.017-.041-.83C4 10.74 7.547 7.013 12 7.013c1.958 0 3.74.72 5.105 1.906m2.632 7.099.04-.83a7.75 7.75 0 0 0-.834-3.918M12 7.012V5.387"
    />
  </Svg>
);
export default IconlystFood1Broken;
