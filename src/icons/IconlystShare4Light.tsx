import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare4Light = ({
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
      d="M19.496 15.028v.009m-5.193-9.338a2.303 2.303 0 1 0-4.607.001 2.303 2.303 0 0 0 4.607 0M7.606 17.188a2.303 2.303 0 1 0-4.607 0 2.303 2.303 0 0 0 4.607 0m13.394 0a2.303 2.303 0 1 0-4.607 0 2.303 2.303 0 0 0 4.607 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.984 20.585a7.56 7.56 0 0 0 3.17-1.698M4.502 11.268a7.9 7.9 0 0 0-.227 1.852c0 .654.082 1.299.236 1.907M10.02 20.601a7.56 7.56 0 0 1-3.157-1.72M6.246 7.963a7.7 7.7 0 0 1 3.451-2.225M14.303 5.738a7.7 7.7 0 0 1 3.424 2.198M19.505 11.268c.145.599.227 1.217.227 1.852a7.8 7.8 0 0 1-.236 1.907"
    />
  </Svg>
);
export default IconlystShare4Light;
