import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxLight = ({
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
      d="M6.15 15.037a1.8 1.8 0 0 0 1.927 0l12.508-7.96a.897.897 0 0 0 0-1.513l-2.735-1.74a1.8 1.8 0 0 0-1.927 0l-12.508 7.96a.897.897 0 0 0 0 1.513z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.585 13.297a.897.897 0 0 0 0-1.513L8.077 3.824a1.8 1.8 0 0 0-1.927 0l-2.735 1.74a.897.897 0 0 0 0 1.513l12.508 7.96a1.8 1.8 0 0 0 1.927 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.002 15.32-.023 1.786a1.72 1.72 0 0 1-.94 1.508l-3.263 1.657a1.72 1.72 0 0 1-1.555-.001l-3.24-1.646a1.72 1.72 0 0 1-.94-1.553l.024-1.75"
    />
  </Svg>
);
export default IconlystDropboxLight;
