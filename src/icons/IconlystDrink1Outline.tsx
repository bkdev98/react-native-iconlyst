import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink1Outline = ({
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
      d="m12.296 13.042.001-.04v-.27899999999999997a5.6 5.6 0 0 0-1.15-3.4l-.316-.42c-.585-.76-.843-1.33-.843-2.18v-2.93c0-.99-.8-1.79-1.787-1.79H7.114c-.988 0-1.787.8-1.787 1.79v2.93c0 .85-.259 1.42-.843 2.18l-.316.42a5.6 5.6 0 0 0-1.15 3.4v6.42c0 1.31 1.056 2.36 2.356 2.36H9.94a2.353 2.353 0 0 0 2.356-2.36v-1.111l.001-.04v-4.95m-5.47-6.62v.3c0 1.29-.441 2.17-1.15 3.09l-.316.42a4.1 4.1 0 0 0-.842 2.49v6.42c0 .48.383.86.856.86H9.94c.474 0 .856-.38.856-.86v-.4H7.41a.746.746 0 0 1-.75-.75v-4.99c0-.41.335-.75.75-.75h3.36a4.1 4.1 0 0 0-.815-2.02l-.316-.42c-.71-.92-1.151-1.8-1.151-3.09v-.3zm1.662-1.5v-1.13a.29.29 0 0 0-.287-.29H7.114a.29.29 0 0 0-.287.29v1.13zm2.308 8.83H8.16v3.49h2.636zM13.78 7.633c.03-.39.356-.69.746-.69h5.276c.39 0 .717.3.746.69l.383 4.87.004.027a3.83 3.83 0 0 1-3.021 4.36v3.113h.792c.415 0 .75.34.75.75s-.335.75-.75.75h-3.084a.753.753 0 0 1-.75-.75c0-.41.335-.75.75-.75h.792v-3.114a3.83 3.83 0 0 1-3.017-4.386zm3.384 7.83a2.322 2.322 0 0 0 2.287-2.71l-.009-.06-.333-4.25h-3.89l-.333 4.25-.004.03-.005.03a2.322 2.322 0 0 0 2.287 2.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrink1Outline;
