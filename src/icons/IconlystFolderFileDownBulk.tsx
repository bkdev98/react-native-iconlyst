import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileDownBulk = ({
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
      d="M14.73 14.694 12.532 16.9l-.004.004a.75.75 0 0 1-.509.219h-.039a.76.76 0 0 1-.454-.167l-.006-.006-.002-.001-.002-.002-.043-.039-.004-.004-.001-.001-.002-.002-.001-.001-2.196-2.206a.75.75 0 1 1 1.063-1.059l.917.921.001-4.347a.75.75 0 1 1 1.5 0l-.001 4.348.919-.922a.749.749 0 1 1 1.062 1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileDownBulk;
