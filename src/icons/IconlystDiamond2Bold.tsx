import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamond2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.765 11.718-5.092-2.377a.3.3 0 0 1-.138-.13l-2.379-5.1A1.26 1.26 0 0 0 12 3.371c-.501 0-.943.284-1.155.74L8.471 9.202a.3.3 0 0 1-.138.136L3.235 11.72a1.26 1.26 0 0 0-.735 1.152c0 .498.282.94.736 1.154l5.093 2.378a.3.3 0 0 1 .138.13l2.378 5.1c.212.455.655.738 1.155.738s.944-.283 1.156-.739l2.376-5.094a.3.3 0 0 1 .136-.133l5.098-2.38c.453-.214.734-.656.734-1.154s-.281-.939-.735-1.153"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamond2Bold;
