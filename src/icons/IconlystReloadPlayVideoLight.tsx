import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadPlayVideoLight = ({
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
      d="M4.59 18.279a1.967 1.967 0 1 0 3.933 0 1.967 1.967 0 0 0-3.933 0M17.23 5.638a1.967 1.967 0 1 0 3.934 0 1.967 1.967 0 0 0-3.934 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.834 11.987A8.996 8.996 0 0 1 12.839 3c1.777 0 3.435.518 4.825 1.407M21.833 11.996c0 4.973-4.023 9.004-8.995 9.004a8.93 8.93 0 0 1-4.826-1.407"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.501 13.058a9.4 9.4 0 0 1-2.742 1.72c-.885.348-1.626-.087-1.734-.958a17 17 0 0 1 0-3.666c.118-.907.935-1.292 1.734-.956a9.1 9.1 0 0 1 2.742 1.721c.682.618.699 1.497 0 2.139"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadPlayVideoLight;
