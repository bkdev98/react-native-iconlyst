import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompareGitDiffOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.745 8.781a.75.75 0 0 1 .75.75v3.913c0 .874.347 1.712.965 2.33l3.198 3.198a.75.75 0 1 1-1.06 1.06L7.4 16.834a4.8 4.8 0 0 1-1.405-3.39V9.531a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.127 15.383a.75.75 0 0 1 .75.75v3.37a.75.75 0 0 1-.75.75H7.756a.75.75 0 1 1 0-1.5h2.621v-2.62a.75.75 0 0 1 .75-.75M6.788 5.207a1.789 1.789 0 1 0 .001 3.578 1.789 1.789 0 0 0 0-3.578M3.5 6.995a3.289 3.289 0 1 1 6.578.001 3.289 3.289 0 0 1-6.578 0M12.623 4.496a.75.75 0 0 1 .75-.75h3.371a.75.75 0 1 1 0 1.5h-2.621v2.621a.75.75 0 1 1-1.5 0zM17.712 15.219a1.789 1.789 0 1 0 0 3.577 1.789 1.789 0 0 0 0-3.577m-3.288 1.788a3.289 3.289 0 1 1 6.577.001 3.289 3.289 0 0 1-6.577 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.843 3.966a.75.75 0 0 1 1.06 0l3.199 3.198a4.8 4.8 0 0 1 1.404 3.39v3.913a.75.75 0 1 1-1.5 0v-3.913c0-.874-.347-1.712-.965-2.33l-3.198-3.198a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCompareGitDiffOutline;
