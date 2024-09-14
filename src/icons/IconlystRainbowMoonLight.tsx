import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowMoonLight = ({
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
      d="M16.087 20.312a3.973 3.973 0 0 0-7.946 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.575 20.312a6.46 6.46 0 0 0-12.92 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 20.313a9 9 0 0 0-18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.927 7.311c.018-.01.039.007.033.026a3.516 3.516 0 0 1-3.376 2.547 3.512 3.512 0 0 1-.968-6.887c.02-.006.035.015.026.033-.452 2.665 1.44 4.63 4.285 4.281"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.614 4.94a2.25 2.25 0 0 1-1.5 1.5 2.25 2.25 0 0 1 1.5 1.5 2.25 2.25 0 0 1 1.5-1.5 2.25 2.25 0 0 1-1.5-1.5"
    />
  </Svg>
);
export default IconlystRainbowMoonLight;
