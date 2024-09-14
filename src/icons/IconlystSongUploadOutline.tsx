import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongUploadOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a.75.75 0 1 1-1.5 0 8.25 8.25 0 1 0-8.25 8.25.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M10.988 16.808q-.174 0-.348-.02a2.853 2.853 0 0 1-2.49-3.173 2.854 2.854 0 1 1 5.664.681 2.85 2.85 0 0 1-2.826 2.511zm-.007-4.205a1.353 1.353 0 1 0 1.344 1.514 1.354 1.354 0 0 0-1.182-1.5 1 1 0 0 0-.162-.014"
    />
    <Path
      fill={props.color}
      d="M13.07 14.956q-.044.001-.09-.005a.75.75 0 0 1-.654-.835l.755-6.266a.75.75 0 0 1 1.47-.093 2.18 2.18 0 0 0 1.306 1.42.75.75 0 0 1-.473 1.424 3.3 3.3 0 0 1-1.054-.58l-.515 4.275a.75.75 0 0 1-.744.66M20.476 18.027a.75.75 0 0 1-.532-.221l-1.637-1.645-1.638 1.645a.75.75 0 1 1-1.064-1.06l2.17-2.177a.751.751 0 0 1 1.063 0l2.17 2.178a.75.75 0 0 1-.532 1.28"
    />
    <Path
      fill={props.color}
      d="M18.307 21.326a.75.75 0 0 1-.75-.75v-5.478a.75.75 0 0 1 1.5 0v5.478a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystSongUploadOutline;
