import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubCircleLight = ({
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
      d="M14.682 20.795c.156-1.57-.734-3.217-1.14-3.637 1.895-.21 3.885-.929 3.885-4.222 0-.843-.324-1.652-.905-2.263a3.06 3.06 0 0 0-.054-2.274s-.712-.211-2.36.893a8.05 8.05 0 0 0-4.222 0c-1.648-1.104-2.36-.893-2.36-.893a3.06 3.06 0 0 0-.053 2.274 3.28 3.28 0 0 0-.906 2.28c0 3.27 1.992 3.98 3.886 4.215-.407.419-1.299 2.053-1.142 3.625A9 9 0 0 1 3 12.203c0-4.974 4.026-9 9-9 4.964 0 9 4.026 9 9 0 4.026-2.662 7.446-6.318 8.592"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGithubCircleLight;
