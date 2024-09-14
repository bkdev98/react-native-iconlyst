import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraLightcurved = ({
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
      d="M15.438 12.498a3.146 3.146 0 1 0-6.291 0 3.146 3.146 0 0 0 6.291 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.293 20.2c8.045 0 9.003-2.41 9.003-7.634 0-3.66-.485-5.62-3.534-6.462a1.9 1.9 0 0 1-.842-.533c-.407-.446-.703-1.813-1.684-2.227-.981-.412-4.921-.393-5.887 0-.964.395-1.278 1.781-1.684 2.227a1.9 1.9 0 0 1-.842.533c-3.05.842-3.534 2.801-3.534 6.462 0 5.224.958 7.634 9.003 7.634"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.205 9h.009"
    />
  </Svg>
);
export default IconlystCameraLightcurved;
