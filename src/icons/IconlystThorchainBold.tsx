import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThorchainBold = ({
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
      d="M19.948 3.023a1.144 1.144 0 0 0-1.393-.439L7.093 6.974a.5.5 0 0 0-.169.826l4.158 4.012a.3.3 0 0 1 .01.422l-6.917 7.282a1.15 1.15 0 0 0-.123 1.463 1.146 1.146 0 0 0 1.391.438l11.462-4.39a.501.501 0 0 0 .169-.827l-4.156-4.01a.3.3 0 0 1-.01-.423l6.916-7.283a1.15 1.15 0 0 0 .124-1.46"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThorchainBold;
