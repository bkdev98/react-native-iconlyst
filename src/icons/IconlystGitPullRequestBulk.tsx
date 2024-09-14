import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullRequestBulk = ({
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
      d="M12.491 5.385a.75.75 0 0 0 0 1.5h2.2c.695 0 1.258.562 1.258 1.257v6.911a.75.75 0 0 0 1.5 0V8.142a2.756 2.756 0 0 0-2.757-2.757zm-4.44 3.564a.75.75 0 1 0-1.5 0v6.107a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Circle cx={7.298} cy={6.48} r={2.855} fill={props.color} />
    <Circle cx={7.298} cy={17.517} r={2.855} fill={props.color} />
    <Circle cx={16.702} cy={17.517} r={2.855} fill={props.color} />
  </Svg>
);
export default IconlystGitPullRequestBulk;
