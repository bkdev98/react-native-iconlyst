import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylistTwoTone = ({
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
      d="M21.05 17.685v-5.157a3.314 3.314 0 0 0-3.313-3.313H7.263a3.314 3.314 0 0 0-3.314 3.313v5.156a3.314 3.314 0 0 0 3.314 3.314h10.474a3.314 3.314 0 0 0 3.313-3.314"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.49 15.951a7.5 7.5 0 0 1-2.19 1.374c-.707.279-1.299-.069-1.385-.765a13.6 13.6 0 0 1 0-2.928c.094-.724.747-1.031 1.385-.762.817.335 1.551.79 2.19 1.374.544.493.557 1.195 0 1.707"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.682 6.113h11.636M9.219 3h6.561"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVideoPlaylistTwoTone;
