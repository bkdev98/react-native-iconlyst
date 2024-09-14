import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartCloseOutline = ({
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
      d="M14.593 3.07a6.44 6.44 0 0 1 3.026.214h.003c3.846 1.24 5.094 5.406 3.987 8.86l-.002.004c-.91 2.781-3.226 4.986-5.213 6.464a26 26 0 0 1-3.498 2.178 14 14 0 0 1-.3.149l-.018.008-.005.003h-.002l-.318-.679-.318.68-.002-.002-.005-.002-.018-.009-.065-.031-.24-.12a26.18 26.18 0 0 1-3.533-2.197c-1.998-1.482-4.322-3.69-5.184-6.449-1.107-3.457.156-7.607 3.996-8.856l.009-.002a6.5 6.5 0 0 1 3.02-.204c.882.15 1.692.654 2.338 1.113.646-.465 1.458-.971 2.342-1.122m-2.34 17.201-.318.68c.201.093.434.093.635 0zm0-.837a24.259 24.259 0 0 0 3.245-2.026c1.915-1.423 3.92-3.395 4.683-5.724.934-2.916-.191-6.06-3.018-6.971a4.94 4.94 0 0 0-2.32-.164c-.683.117-1.385.607-2.14 1.173a.75.75 0 0 1-.896.004c-.761-.564-1.46-1.052-2.144-1.168a5 5 0 0 0-2.32.155c-2.83.923-3.96 4.061-3.025 6.973l.001.006c.715 2.292 2.716 4.261 4.647 5.693a25 25 0 0 0 3.288 2.049"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.418 9.169a.75.75 0 0 1 0 1.06l-3.276 3.277a.75.75 0 0 1-1.061-1.061l3.276-3.276a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.081 9.169a.75.75 0 0 1 1.06 0l3.277 3.276a.75.75 0 0 1-1.06 1.06L10.08 10.23a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartCloseOutline;
