import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeAiTwoTone = ({
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
      d="M20.851 11.244v7.313a2.44 2.44 0 0 1-2.44 2.442L16.619 21a1.647 1.647 0 0 1-1.649-1.646v-3.25c0-.962-.78-1.743-1.742-1.743h-2.454c-.962 0-1.743.78-1.743 1.743v3.25c0 .91-.737 1.647-1.648 1.646l-1.794-.001a2.44 2.44 0 0 1-2.44-2.442V9.244c0-.966.516-1.858 1.353-2.34l6.15-3.543a2.7 2.7 0 0 1 2.697 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.872 9.456.106-.287a3.95 3.95 0 0 1 2.331-2.335l.287-.106-.287-.106a3.95 3.95 0 0 1-2.331-2.335L17.872 4l-.106.287a3.95 3.95 0 0 1-2.332 2.335l-.286.106.286.106a3.95 3.95 0 0 1 2.332 2.335zM12.554 10.809a1.86 1.86 0 0 1 1.235-1.237 1.86 1.86 0 0 1-1.235-1.237 1.86 1.86 0 0 1-1.235 1.237c.592.18 1.055.644 1.235 1.237"
    />
  </Svg>
);
export default IconlystHomeAiTwoTone;
