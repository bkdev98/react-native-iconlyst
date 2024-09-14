import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingCloseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m20.95 5.318 1.061-1.06c.283-.284.283-.849 0-1.132a.79.79 0 0 0-1.132 0l-1.06 1.061-1.06-1.06a.79.79 0 0 0-1.132 0c-.354.352-.354.777 0 1.13l1.06 1.061-.99.99a.79.79 0 0 0 0 1.131c.354.354.778.354 1.132 0l.99-.99.99.99a.79.79 0 0 0 1.131 0c.354-.353.354-.778 0-1.13zM15.526 11.3a.98.98 0 0 1-.97-.98.97.97 0 0 1 .97-.97c.54 0 .98.44.98.97 0 .54-.44.98-.98.98M15.476 15.04c-.86 1.13-2.13 1.78-3.47 1.78s-2.61-.65-3.47-1.78c-.26-.33-.2-.8.13-1.05s.8-.19 1.05.14c.58.76 1.42 1.19 2.29 1.19s1.71-.43 2.29-1.19c.25-.33.72-.39 1.05-.14s.39.72.13 1.05M8.056 10.32a.97.97 0 0 1 .97-.97c.54 0 .98.44.98.97 0 .54-.44.98-.98.98a.98.98 0 0 1-.97-.98"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.286 4.6c0 3 2.4 5.4 5.4 5.4.563 0 .87-.154.963.433.083.521.127 1.017.127 1.567 0 5.2-4.3 9.5-9.5 9.5s-9.5-4.3-9.5-9.5 4.3-9.5 9.5-9.5c1.023 0 1.96.173 2.89.439.126.035.213.15.208.28-.015.429-.088.868-.088 1.381"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSmilingCloseBulk;
