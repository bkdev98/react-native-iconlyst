import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageDownloadOutline = ({
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
      d="M4.127 3.88c.975-1.045 2.362-1.63 4-1.63h8.334c1.642 0 3.03.584 4.004 1.63.968 1.04 1.47 2.476 1.47 4.086v4.006a.75.75 0 0 1-1.5 0v-1.808H4.153v5.653c0 1.3.404 2.348 1.07 3.063.66.71 1.634 1.153 2.905 1.153h1.73a.75.75 0 1 1 0 1.5h-1.73c-1.641 0-3.03-.584-4.003-1.63-.969-1.04-1.472-2.476-1.472-4.086V7.966c0-1.611.506-3.046 1.475-4.086m.025 4.784h16.284v-.698c0-1.3-.404-2.348-1.07-3.063-.66-.71-1.634-1.153-2.905-1.153H8.127c-1.266 0-2.24.443-2.903 1.153-.667.716-1.072 1.764-1.072 3.063zm1.749-2.157a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.455 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.457 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m6.12 7.405a.75.75 0 0 1 .75.75v4.527l1.411-1.411a.75.75 0 0 1 1.06 1.06l-2.691 2.692a.75.75 0 0 1-1.061 0l-2.691-2.692a.75.75 0 0 1 1.06-1.06l1.411 1.41v-4.526a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageDownloadOutline;
