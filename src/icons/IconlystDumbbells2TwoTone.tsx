import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells2TwoTone = ({
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
      d="M16.582 13.666a.46.46 0 0 1-.393.466c-.357.048-.857.199-1.168.67-.416.627-.328 2.943.011 3.454.218.36.63.74 2.759.717 2.127-.021 2.531-.41 2.741-.774.33-.517.37-2.834-.059-3.454-.321-.464-.823-.604-1.181-.645a.46.46 0 0 1-.403-.457l-.055-5.336a.46.46 0 0 1 .394-.465c.357-.048.856-.2 1.167-.67.417-.628.329-2.943-.011-3.454-.218-.36-.629-.739-2.758-.717s-2.533.41-2.742.773c-.33.518-.37 2.836.059 3.454.32.464.824.605 1.182.645.23.027.4.226.403.459z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.54 15.452a.46.46 0 0 1-.46.401c-.36-.006-.876.067-1.255.486-.506.557-.77 2.86-.511 3.416.16.388.51.826 2.617 1.125 2.107.301 2.566-.021 2.828-.349.404-.461.794-2.747.464-3.424-.248-.507-.722-.722-1.07-.816a.463.463 0 0 1-.33-.514l.753-5.281a.46.46 0 0 1 .46-.4c.36.005.876-.068 1.256-.486.506-.558.77-2.86.51-3.416-.16-.39-.51-.826-2.617-1.126s-2.565.021-2.827.35c-.405.46-.795 2.745-.464 3.423.247.507.722.721 1.07.816a.46.46 0 0 1 .329.513z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDumbbells2TwoTone;
