import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.905 6.221 3.768-2.398a1.8 1.8 0 0 1 1.927 0l2.735 1.74a.897.897 0 0 1 0 1.514l-12.508 7.96a1.8 1.8 0 0 1-1.927 0l-2.735-1.74a.897.897 0 0 1 0-1.513l5.722-3.642"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.42 11.057-6.255-3.98a.897.897 0 0 1 0-1.513L6.9 3.824a1.8 1.8 0 0 1 1.927 0l12.508 7.96a.897.897 0 0 1 0 1.513l-2.735 1.74a1.8 1.8 0 0 1-1.927 0L12.841 12.6M13.526 20.27a1.72 1.72 0 0 1-1.555 0l-3.24-1.646a1.72 1.72 0 0 1-.94-1.553l.024-1.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.752 15.32-.023 1.786a1.72 1.72 0 0 1-.94 1.508l-.751.381"
    />
  </Svg>
);
export default IconlystDropboxBroken;
