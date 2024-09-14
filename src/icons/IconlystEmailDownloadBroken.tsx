import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDownloadBroken = ({
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
      d="M11.918 20.1H7.582C4.845 20.107 3 17.86 3 15.094v-6.18C3 6.15 4.845 3.9 7.582 3.9h1.085M21 10.594v-1.68C21 6.15 19.155 3.9 16.418 3.9H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.31 9.166-3.998 3.252a2.07 2.07 0 0 1-2.574 0L6.705 9.166M15.877 17.527l2.56 2.572L21 17.527M18.438 20.101v-5.695"
    />
  </Svg>
);
export default IconlystEmailDownloadBroken;
