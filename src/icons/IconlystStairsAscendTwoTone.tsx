import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsAscendTwoTone = ({
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
      d="M21.445 5.27h-4.032a.47.47 0 0 0-.468.468v3.526c0 .259-.21.468-.468.468h-3.565a.47.47 0 0 0-.467.468v3.674c0 .259-.21.468-.468.468H8.412a.47.47 0 0 0-.467.468v3.451c0 .259-.21.468-.468.468H3.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.594 18.593 4.906-4.904m-4.906 4.904.005-3.107m-.005 3.107 3.106-.006"
    />
  </Svg>
);
export default IconlystStairsAscendTwoTone;
