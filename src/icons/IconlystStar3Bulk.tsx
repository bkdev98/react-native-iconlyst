import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar3Bulk = ({
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
      d="M13.467 2.892a2.94 2.94 0 0 0-2.934 0L4.847 6.175a2.94 2.94 0 0 0-1.468 2.543v6.565c0 1.048.56 2.017 1.468 2.541l5.686 3.283a2.93 2.93 0 0 0 2.934 0l5.686-3.283a2.94 2.94 0 0 0 1.468-2.542V8.719c0-1.05-.56-2.018-1.468-2.543z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 8.203a.75.75 0 0 1 .75.75v1.714l1.464-.89a.75.75 0 0 1 .78 1.282l-1.55.942 1.55.942a.75.75 0 0 1-.779 1.281l-1.465-.89v1.714a.75.75 0 0 1-1.5 0v-1.714l-1.466.89a.75.75 0 1 1-.78-1.281L10.556 12l-1.55-.942a.75.75 0 0 1 .78-1.282l1.465.89V8.954a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar3Bulk;
