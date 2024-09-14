import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckInLight = ({
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
      d="M8.355 12.093H2.87m5.485 0-2.008-2m2.008 2-2.008 2M21.13 17.437V5.104c0-1.3-1.078-2.354-2.408-2.354H9.539c-1.33 0-2.409 1.054-2.409 2.354v1.803M7.13 20.316v-2.803"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.13 18.692V6.056c0-1.622-1.526-2.834-3.152-2.504l-5.132 1.04c-1.216.247-2.087 1.292-2.087 2.504v10.556c0 1.212.871 2.257 2.087 2.503l5.131 1.04c1.627.33 3.153-.882 3.153-2.503"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.13 11.533v1.682"
    />
  </Svg>
);
export default IconlystCheckInLight;
