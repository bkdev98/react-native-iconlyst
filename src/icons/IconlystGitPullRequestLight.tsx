import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullRequestLight = ({
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
      d="M7.292 20.001a2.474 2.474 0 1 1 0-4.947 2.474 2.474 0 0 1 0 4.947M16.71 20.001a2.474 2.474 0 1 1 0-4.947 2.474 2.474 0 0 1 0 4.947M7.292 8.947a2.474 2.474 0 1 1 0-4.948 2.474 2.474 0 0 1 0 4.948"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.291 8.945v6.107M12.48 6.133h2.201c1.109 0 2.007.898 2.007 2.007v6.911"
    />
  </Svg>
);
export default IconlystGitPullRequestLight;
