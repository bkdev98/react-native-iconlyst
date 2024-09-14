import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchInfoBold = ({
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
      d="M11.135 8.248c-.42 0-.75-.29-.75-.71v-.08a.749.749 0 1 1 1.5 0c0 .42-.34.79-.75.79m.74 6.06c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-4.03a.749.749 0 1 1 1.5 0zm-.74-11.81a8.42 8.42 0 0 0 0 16.84c4.65 0 8.41-3.77 8.41-8.42s-3.76-8.42-8.41-8.42M20.992 19.794l-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchInfoBold;
