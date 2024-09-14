import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDSuccesBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.001 15.116a.75.75 0 0 0-.75.75v1.57c0 1.731-1.41 3.14-3.143 3.14h-1.289a.75.75 0 0 0 0 1.5h1.289a4.647 4.647 0 0 0 4.643-4.64v-1.57a.75.75 0 0 0-.75-.75M8.149 20.575H6.892a3.145 3.145 0 0 1-3.143-3.14v-1.569a.75.75 0 0 0-1.5 0v1.57a4.647 4.647 0 0 0 4.643 4.64h1.257a.75.75 0 0 0 0-1.5M2.999 9.545a.75.75 0 0 0 .75-.75v-1.57a3.15 3.15 0 0 1 3.143-3.15h1.289a.75.75 0 0 0 0-1.5H6.892a4.65 4.65 0 0 0-4.643 4.65v1.57c0 .414.336.75.75.75M17.108 2.575H15.85a.75.75 0 0 0 0 1.5h1.257a3.15 3.15 0 0 1 3.143 3.15v1.571a.75.75 0 0 0 1.5 0v-1.57a4.65 4.65 0 0 0-4.643-4.65" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.562 8.156v.61a1 1 0 1 0 2 0v-.61a1 1 0 1 0-2 0M15.44 9.766a1 1 0 0 0 1-1v-.61a1 1 0 1 0-2 0v.61a1 1 0 0 0 1 1M11.555 13.766c.19 0 .38-.054.55-.165l.27-.18c.735-.442 1.093-1.09 1.093-1.975v-1.98a1 1 0 1 0-2 0v1.98c0 .139-.019.182-.019.182s-.024.032-.142.103l-.303.2a1 1 0 0 0 .551 1.835M16.2 14.407a1 1 0 0 0-1.41-.111c-1.895 1.62-3.619 1.616-5.592-.011a1 1 0 1 0-1.272 1.543c1.354 1.117 2.735 1.676 4.106 1.676 1.376 0 2.741-.563 4.057-1.687a1 1 0 0 0 .111-1.41"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDSuccesBulk;
