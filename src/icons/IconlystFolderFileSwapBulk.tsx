import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileSwapBulk = ({
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
      d="M16.62 5.364h-2.652a1.66 1.66 0 0 1-1.313-.657l-.856-1.14a2.66 2.66 0 0 0-2.111-1.054H7.813c-3.424 0-5.088 1.907-5.088 5.829v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.837 15.002-1.688 1.696a.752.752 0 0 1-1.282-.529V10.53a.75.75 0 0 1 1.5 0v3.823l.408-.41a.749.749 0 1 1 1.062 1.06m-4.254 1.166a.75.75 0 0 1-1.5 0V12.35l-.406.408A.75.75 0 1 1 8.613 11.7l1.688-1.698a.748.748 0 0 1 1.282.528z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileSwapBulk;
