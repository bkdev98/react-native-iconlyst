import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCloudTwoTone = ({
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
      d="M19.933 12.472V8.954c0-.525-.203-1.03-.567-1.408l-3.762-3.92A2.04 2.04 0 0 0 14.135 3H8.526a3.72 3.72 0 0 0-3.732 3.63v10.428a3.725 3.725 0 0 0 3.643 3.806"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.615 3.063v2.87a2.54 2.54 0 0 0 2.535 2.542h2.72"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.178 16.825c-1.148.01-2.069.812-2.075 2.094-.004.85.505 1.58 1.232 1.909.306.123.61.172.841.172h4.953c.232 0 .537-.046.847-.17a2.1 2.1 0 0 0 1.23-1.911c0-1.313-.927-2.084-2.075-2.094 0-.826-.647-2.477-2.476-2.477-1.83 0-2.477 1.65-2.477 2.477"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentCloudTwoTone;
