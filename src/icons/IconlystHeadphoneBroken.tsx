import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneBroken = ({
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
      d="M8.684 17.872a1.884 1.884 0 0 1-3.262 1.883c-.84-1.26-1.428-2.456-1.771-3.567-.193-.623.092-1.294.657-1.621l.221-.127a1.883 1.883 0 0 1 2.573.69M15.829 17.872a1.884 1.884 0 0 0 3.262 1.883c.84-1.26 1.428-2.456 1.771-3.567.193-.623-.092-1.294-.657-1.621l-.221-.127a1.883 1.883 0 0 0-2.573.69M14.407 3.567A8.83 8.83 0 0 1 18.69 6.07c.47.497.44 1.287-.044 1.77-.513.513-1.336.486-1.838-.037l-.091-.094a6.306 6.306 0 0 0-8.937 0l-.087.089-.003.003c-.5.521-1.321.55-1.833.037-.483-.482-.513-1.27-.044-1.766q.082-.086.167-.172a8.84 8.84 0 0 1 5.856-2.588"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.893 7.482a8.94 8.94 0 0 1 2.358 6.065c0 .847-.118 1.666-.343 2.44M3.637 16.122a8.4 8.4 0 0 1-.387-2.575c0-2.34.891-4.463 2.358-6.065"
    />
  </Svg>
);
export default IconlystHeadphoneBroken;
