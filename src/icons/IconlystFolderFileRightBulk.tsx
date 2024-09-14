import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileRightBulk = ({
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
      d="M16.395 5.364h-2.652a1.66 1.66 0 0 1-1.313-.657l-.856-1.14a2.66 2.66 0 0 0-2.111-1.054H7.588C4.164 2.513 2.5 4.42 2.5 8.342v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.832 13.31a.7.7 0 0 1-.055.262v.001l-.028.063-.002.002-.001.002-.001.002-.001.002-.001.002-.001.002-.001.002-.001.001-.002.004-.001.002-.001.002-.001.001-.001.002-.001.002-.001.002-.001.002a.8.8 0 0 1-.118.153l-.002.002-2.209 2.198a.747.747 0 0 1-1.06-.002.75.75 0 0 1 .002-1.06l.922-.917H8.918a.75.75 0 0 1 0-1.5h4.348l-.922-.919a.751.751 0 0 1 1.058-1.063l2.208 2.2.014.013a.8.8 0 0 1 .14.204l.001.002.001.003.001.002v.002l.001.002q0-.002.001.002l.001.002v.002l.001.002v.001l.001.002.001.002.001.002v.001a.7.7 0 0 1 .058.27z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileRightBulk;
