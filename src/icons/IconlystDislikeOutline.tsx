import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislikeOutline = ({
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
      d="M9.824 3.176c.874.144 1.675.646 2.308 1.103.638-.455 1.439-.95 2.312-1.093a6.5 6.5 0 0 1 2.462.055.75.75 0 1 1-.317 1.466 5 5 0 0 0-1.895-.042h-.005c-.672.11-1.362.589-2.111 1.148a.75.75 0 0 1-.902-.003c-.741-.56-1.43-1.045-2.098-1.154l-.007-.001a4.85 4.85 0 0 0-2.285.158c-2.784.903-3.892 3.992-2.972 6.871.356 1.084.988 2.102 1.783 3.014a.75.75 0 1 1-1.131.985c-.895-1.027-1.646-2.217-2.078-3.534l-.001-.005c-1.095-3.419.14-7.53 3.94-8.76l.006-.001a6.35 6.35 0 0 1 2.99-.207M19.232 5.226a.75.75 0 0 1 1.055.11c1.498 1.85 1.838 4.464 1.093 6.806-.852 2.725-3.148 4.906-5.12 6.37a26 26 0 0 1-3.489 2.172l-.3.149-.018.008-.006.003h-.001s-.001.001-.319-.678l-.318.68-.002-.002-.006-.003-.02-.01-.075-.036-.273-.137a25.25 25.25 0 0 1-3.928-2.525.75.75 0 0 1 .928-1.178 23.8 23.8 0 0 0 3.686 2.369l.008.004a24.417 24.417 0 0 0 3.239-2.02c1.906-1.415 3.878-3.357 4.583-5.615v-.004c.619-1.94.305-4.011-.828-5.408a.75.75 0 0 1 .11-1.055m-7.105 14.94-.318.68a.75.75 0 0 0 .636-.001z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.78 3.728a.75.75 0 0 1 0 1.061L7.123 19.448a.75.75 0 0 1-1.06-1.061L20.72 3.728a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDislikeOutline;
