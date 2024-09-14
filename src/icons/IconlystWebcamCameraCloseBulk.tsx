import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraCloseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m20.345 19.985-3.45-3.45c.01 0 .01-.02.01-.02l-.56-.56.04.07-11.67-11.67a.754.754 0 0 0-1.06 0c-.3.29-.3.77 0 1.06l1.91 1.91c-.28.74-.42 1.53-.42 2.36 0 2.45 1.26 4.62 3.16 5.89 1.12.75 2.46 1.18 3.91 1.18.785 0 1.544-.125 2.25-.367a.2.2 0 0 1 .21.047l.652.652c.1.1.067.269-.065.32a8.3 8.3 0 0 1-3.047.578 8.2 8.2 0 0 1-4.341-1.226.204.204 0 0 0-.285.07l-1.144 1.986c-.31.54-.31 1.18 0 1.72.31.53.87.85 1.49.85h8.55a1.71 1.71 0 0 0 1.7-1.44l1.1 1.1c.15.15.34.22.53.22s.39-.07.53-.22c.3-.29.3-.76 0-1.06"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.386 8.595c-.088.066-.088.194-.01.272l1.658 1.657c.078.078.206.079.272-.01a1.372 1.372 0 0 0-1.92-1.92" />
      <Path d="M12.215 6.815c1.58 0 2.87 1.29 2.87 2.87 0 .728-.273 1.39-.714 1.894a.21.21 0 0 0 .005.288l2.678 2.677a.196.196 0 0 0 .28-.001 7.04 7.04 0 0 0 1.941-4.858c0-3.9-3.17-7.07-7.06-7.07a7.08 7.08 0 0 0-4.867 1.94.196.196 0 0 0-.002.282l2.688 2.687a.21.21 0 0 0 .287.005 2.9 2.9 0 0 1 1.894-.714" />
    </G>
  </Svg>
);
export default IconlystWebcamCameraCloseBulk;
