import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationCloseOutline = ({
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
      d="m14.172 5.025 3.624 7.27a.75.75 0 1 1-1.343.669l-3.624-7.27a1.146 1.146 0 0 0-2.056.008l-5.65 11.584c-.465.952.502 1.972 1.477 1.558l4.16-1.762a2.66 2.66 0 0 1 2.046-.009h.001l.858.356a.75.75 0 0 1-.575 1.386l-.856-.355a1.15 1.15 0 0 0-.89.003l-4.159 1.762c-2.253.955-4.484-1.398-3.41-3.597m0 0 5.65-11.583c.962-1.972 3.769-1.985 4.747-.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.13 15.571a.75.75 0 0 1 1.06 0l3.59 3.59a.75.75 0 0 1-1.06 1.06l-3.59-3.59a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.78 15.571a.75.75 0 0 1 0 1.06l-3.59 3.59a.75.75 0 0 1-1.06-1.06l3.59-3.59a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationCloseOutline;
