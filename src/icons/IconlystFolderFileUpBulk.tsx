import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileUpBulk = ({
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
      d="M14.729 12.949a.75.75 0 0 1-1.061-.002l-.918-.922v4.348a.75.75 0 1 1-1.5 0v-4.348l-.917.922a.75.75 0 1 1-1.063-1.059l2.198-2.209.002-.001a.7.7 0 0 1 .21-.148l.002-.001.002-.001.002-.001h.001l.001-.001.004-.002.003-.001.003-.001.002-.001.002-.001.002-.001.002-.001.002-.001a.8.8 0 0 1 .273-.058h.037a.76.76 0 0 1 .5.208l.004.004.01.009 2.199 2.208a.75.75 0 0 1-.002 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileUpBulk;