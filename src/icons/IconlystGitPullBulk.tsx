import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullBulk = ({
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
      d="M8.034 15.052a.75.75 0 0 1-1.5 0v-3.104a1 1 0 0 1 0-.144V8.945a.75.75 0 0 1 1.5 0v2.181h6.679a2.756 2.756 0 0 1 2.757 2.756v1.17a.75.75 0 0 1-1.5 0v-1.17c0-.693-.562-1.256-1.257-1.256h-6.68z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.255 6.53a2.906 2.906 0 1 1-5.812 0 2.906 2.906 0 0 1 5.812 0M10.255 17.466a2.906 2.906 0 1 1-5.812 0 2.906 2.906 0 0 1 5.812 0M16.651 20.372a2.906 2.906 0 1 0 0-5.811 2.906 2.906 0 0 0 0 5.811"
    />
  </Svg>
);
export default IconlystGitPullBulk;
