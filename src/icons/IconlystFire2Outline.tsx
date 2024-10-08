import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire2Outline = ({
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
      d="M9.95 2.48a.75.75 0 0 1 .821-.176 18 18 0 0 1 6.82 4.826 11.4 11.4 0 0 1 2.481 7.22q.004.065.003.108a7.2 7.2 0 0 1-7.992 7.248 8.35 8.35 0 0 1-4.6-1.566 7.82 7.82 0 0 1-3.05-5.81l-.001-.009a8.88 8.88 0 0 1 2.16-6.164.75.75 0 0 1 1.315.427c.047.56.27 1.677.542 2.701l.028.104q.139-.254.28-.487A26 26 0 0 1 9.601 9.6c.187-.278.347-.514.47-.712a5.06 5.06 0 0 0 .323-4.26 72 72 0 0 0-.506-1.139l-.081-.18a.75.75 0 0 1 .143-.828m1.987 2.027a6.56 6.56 0 0 1-.58 5.154c-.143.23-.326.503-.516.784q-.053.076-.104.154c-.232.343-.473.707-.695 1.076-.468.779-.753 1.435-.763 1.875a.75.75 0 0 1-1.09.652 1 1 0 0 1-.332-.279 2 2 0 0 1-.163-.25 4.5 4.5 0 0 1-.246-.554A16 16 0 0 1 7 11.67a28 28 0 0 1-.26-1.069 7.4 7.4 0 0 0-.809 3.657 6.32 6.32 0 0 0 2.456 4.685 6.85 6.85 0 0 0 3.773 1.265l.064.004q.372.043.742.037a5.7 5.7 0 0 0 5.61-5.787v-.01a1 1 0 0 1-.003-.077 9.9 9.9 0 0 0-2.142-6.296 16.5 16.5 0 0 0-4.493-3.572"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.898 11.497a.75.75 0 0 1 .074.863c-.812 1.385-.968 2.355-.882 3.026.085.663.42 1.153.837 1.555.13.125.298.276.492.45q.179.158.382.343c.337.307.709.657.979.969a.75.75 0 1 1-1.136.98 11 11 0 0 0-.853-.84l-.343-.309c-.21-.189-.413-.37-.56-.51l-.001-.002c-.572-.55-1.143-1.335-1.285-2.446-.077-.6-.023-1.261.19-1.991-1.376.912-1.942 1.975-2.172 2.848a4.6 4.6 0 0 0-.063 2.042 3 3 0 0 0 .033.138v-.001.003-.002.002a.75.75 0 0 1-1.434.438l.717-.22-.717.22v-.002l-.001-.002-.002-.006-.005-.018-.015-.055a5.52 5.52 0 0 1-.138-.828 6.1 6.1 0 0 1 .174-2.091c.445-1.685 1.74-3.578 4.89-4.772a.75.75 0 0 1 .84.218"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFire2Outline;
