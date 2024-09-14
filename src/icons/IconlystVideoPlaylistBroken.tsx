import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylistBroken = ({
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
      d="M12.25 20.998H7.013A3.314 3.314 0 0 1 3.7 17.684v-5.156a3.314 3.314 0 0 1 3.314-3.313h10.474a3.314 3.314 0 0 1 3.313 3.313v5.156a3.314 3.314 0 0 1-3.313 3.314H15.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.24 15.951a7.5 7.5 0 0 1-2.19 1.374c-.707.279-1.299-.069-1.385-.765a13.6 13.6 0 0 1 0-2.928c.094-.724.747-1.031 1.385-.762.817.335 1.551.79 2.19 1.374.544.493.557 1.195 0 1.707"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.432 6.113h11.636M8.969 3h6.561"
    />
  </Svg>
);
export default IconlystVideoPlaylistBroken;
