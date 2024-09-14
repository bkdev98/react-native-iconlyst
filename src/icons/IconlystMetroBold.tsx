import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetroBold = ({
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
      d="M10.474 7.935q.151.105.336.107h2.345a.58.58 0 0 0 .545-.388l1.395-4.897a.3.3 0 0 0-.289-.382H9.157a.3.3 0 0 0-.289.382l1.41 4.938a.57.57 0 0 0 .196.24"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.174 18.678 1.04-1.52h7.545l1.04 1.52zm1.05-6.633c.52 0 .946.425.946.946a.946.946 0 1 1-.946-.946m7.719 0a.946.946 0 1 1-.945.946c0-.521.424-.946.945-.946m3.553 3.703a4.1 4.1 0 0 0 .973-3.256l-.9-6.564a4.1 4.1 0 0 0-1.368-2.54 4 4 0 0 0-1.204-.715.285.285 0 0 0-.373.194l-1.494 5.24a2.09 2.09 0 0 1-1.972 1.435h-2.35a2.06 2.06 0 0 1-1.204-.386 2.07 2.07 0 0 1-.755-1.005L7.342 2.877a.285.285 0 0 0-.376-.194 4 4 0 0 0-1.16.693 4.1 4.1 0 0 0-1.383 2.552l-.89 6.563a4.1 4.1 0 0 0 .969 3.262c.383.439.865.798 1.395 1.04.198.089.405.145.61.202L4.143 20.45a.75.75 0 1 0 1.238.848l.767-1.121h11.678l.767 1.12a.75.75 0 0 0 1.238-.846L17.468 17c.215-.058.429-.118.635-.212a4.1 4.1 0 0 0 1.393-1.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMetroBold;
