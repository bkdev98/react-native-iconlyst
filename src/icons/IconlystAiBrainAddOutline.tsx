import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainAddOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.213 3.957c.77 0 1.408.604 1.459 1.377a.75.75 0 0 0 .975.666q.299-.096.63-.097c1.154 0 2.098.943 2.098 2.118 0 .533-.193 1.017-.514 1.388a.75.75 0 0 0 .003.983c3.18 3.642.276 7.625-2.392 7.458a.75.75 0 0 0-.797.737 1.47 1.47 0 0 1-1.462 1.454 1.47 1.47 0 0 1-1.463-1.477v-1.905a.75.75 0 0 0-1.5 0v1.905a2.97 2.97 0 0 0 2.963 2.977 2.966 2.966 0 0 0 2.862-2.206c3.683-.353 6.444-5.285 3.296-9.466.32-.541.505-1.174.505-1.848 0-1.994-1.607-3.618-3.6-3.618q-.14 0-.28.01a2.96 2.96 0 0 0-2.783-1.956 2.97 2.97 0 0 0-2.963 2.978V7.36a.75.75 0 1 0 1.5 0V5.435c0-.821.66-1.478 1.463-1.478"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.787 3.957c-.77 0-1.408.604-1.459 1.377A.75.75 0 0 1 7.353 6a2.1 2.1 0 0 0-.63-.097A2.11 2.11 0 0 0 4.625 8.02c0 .533.193 1.017.514 1.388a.75.75 0 0 1-.004.983c-3.18 3.642-.275 7.625 2.393 7.458a.75.75 0 0 1 .797.737 1.47 1.47 0 0 0 1.462 1.454 1.47 1.47 0 0 0 1.463-1.477.75.75 0 0 1 1.5 0 2.97 2.97 0 0 1-2.963 2.977 2.966 2.966 0 0 1-2.862-2.206C3.243 18.982.48 14.05 3.629 9.87a3.6 3.6 0 0 1-.504-1.848c0-1.994 1.606-3.618 3.598-3.618q.141 0 .28.01a2.96 2.96 0 0 1 2.784-1.956 2.97 2.97 0 0 1 2.963 2.978.75.75 0 0 1-1.5 0 1.47 1.47 0 0 0-1.463-1.478"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.997 8.121a3.88 3.88 0 1 0 0 7.76 3.88 3.88 0 0 0 0-7.76m-5.38 3.88a5.38 5.38 0 1 1 10.76 0 5.38 5.38 0 0 1-10.76 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.997 9.611a.75.75 0 0 1 .75.75v.888h.888a.75.75 0 0 1 0 1.5h-.888v.888a.75.75 0 0 1-1.5 0v-.888h-.888a.75.75 0 1 1 0-1.5h.888v-.888a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiBrainAddOutline;
