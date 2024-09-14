import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompareGitDiffBold = ({
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
      d="M11.628 19.503v-3.37a.75.75 0 1 0-1.5 0v1.561L8.21 15.776a3.27 3.27 0 0 1-.965-2.33V9.813a2.91 2.91 0 0 0 2.207-2.818 2.917 2.917 0 0 0-2.913-2.913 2.917 2.917 0 0 0-2.914 2.913c0 1.33.9 2.442 2.12 2.79v3.661c0 1.281.499 2.485 1.404 3.39l1.917 1.917-1.56.001a.75.75 0 0 0 0 1.5l3.367-.001.005.001a.8.8 0 0 0 .288-.059.8.8 0 0 0 .19-.126c.016-.014.037-.019.052-.035a.8.8 0 0 0 .162-.244.8.8 0 0 0 .05-.245c0-.015.008-.027.008-.042M18.255 14.215v-3.66a4.77 4.77 0 0 0-1.404-3.392l-1.918-1.917h1.56a.75.75 0 0 0 0-1.5h-3.37a.75.75 0 0 0-.75.75v3.371a.75.75 0 0 0 1.5 0v-1.56l1.917 1.916a3.28 3.28 0 0 1 .965 2.331v3.634a2.91 2.91 0 0 0-2.207 2.816 2.917 2.917 0 0 0 2.914 2.914 2.917 2.917 0 0 0 2.913-2.914 2.91 2.91 0 0 0-2.12-2.789"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCompareGitDiffBold;
