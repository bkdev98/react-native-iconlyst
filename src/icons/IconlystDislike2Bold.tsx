import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislike2Bold = ({
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
      d="M21.774 8.103a.5.5 0 0 0-.833-.238l-11.4 11a.5.5 0 0 0 .096.79c.47.275 2.063 1.17 2.852 1.17 1.517 0 7.438-3.63 9.074-8.743.45-1.351.523-2.727.21-3.98M21.618 3.394a.75.75 0 0 0-1.06 0l-1.112 1.11c-.49-.355-1.065-.696-1.7-.854-1.659-.551-3.9-.203-5.27 1.723C11.143 3.618 8.935 3.15 7.23 3.65c-3.347 1.115-4.989 4.779-3.818 8.525.688 2.163 2.07 3.928 3.238 5.127l-.892.892a.749.749 0 1 0 1.06 1.06l14.8-14.8a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDislike2Bold;
