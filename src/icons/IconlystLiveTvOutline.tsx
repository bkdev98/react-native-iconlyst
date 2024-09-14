import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiveTvOutline = ({
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
      d="M2.334 11.31a4.78 4.78 0 0 1 4.78-4.779h9.942a4.78 4.78 0 0 1 4.778 4.78v5.456c0 2.639-2.14 4.779-4.778 4.779H7.113c-2.64 0-4.779-2.14-4.779-4.78zm4.78-3.279a3.28 3.28 0 0 0-3.28 3.28v5.456a3.28 3.28 0 0 0 3.28 3.279h9.942a3.28 3.28 0 0 0 3.278-3.28V11.31a3.28 3.28 0 0 0-3.278-3.279z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.846 12.558a15.3 15.3 0 0 0 0 3.249c.028.204.112.28.162.308.055.031.192.074.438-.023a8 8 0 0 0 2.334-1.465c.195-.18.24-.34.24-.45s-.05-.27-.238-.44l-.002-.003a7.8 7.8 0 0 0-2.341-1.466l-.007-.003c-.196-.083-.336-.056-.41-.017-.062.033-.149.11-.176.31m1.165-1.677c-.55-.231-1.164-.235-1.686.039-.534.28-.883.806-.967 1.449l-.002.013a16.8 16.8 0 0 0 0 3.588l.001.016c.076.606.388 1.14.916 1.436.524.295 1.146.293 1.725.065l.006-.002a9.5 9.5 0 0 0 2.785-1.748l.005-.004c.457-.42.73-.969.726-1.564-.003-.594-.28-1.134-.729-1.542a9.3 9.3 0 0 0-2.78-1.746M17.196 2.707a.75.75 0 0 1-.059 1.059L12.584 7.84a.75.75 0 0 1-1.007-.007L7.139 3.76a.75.75 0 0 1 1.015-1.104L12.09 6.27l4.046-3.622a.75.75 0 0 1 1.059.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiveTvOutline;
