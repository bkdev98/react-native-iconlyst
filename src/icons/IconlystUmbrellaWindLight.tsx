import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaWindLight = ({
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
      d="M7.102 4.252a7.814 7.814 0 0 0-2.86 10.673c1.461-.757 2.287-.964 3.62-.847 2.256-2.806 3.815-3.679 7.364-4.25.589-1.338 1.193-1.9 2.55-2.716a7.814 7.814 0 0 0-10.674-2.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.75 6.125a8.4 8.4 0 0 1 1.644 1.439M6.9 8.347c.042.638.163 1.366.425 2.143M11.154 11.125l2.64 4.572a1.44 1.44 0 0 1-2.495 1.44l-.133-.23M6.38 3l.723 1.252M6.017 17.395c.386-.39 1.439-1.156 2.561-1.095M15.35 12.446c-.386.39-1.438 1.156-2.56 1.094M21.034 9.143c-.386.39-1.439 1.156-2.561 1.094M7.783 20.243c-.266.27-.993.797-1.767.755M17.474 14.4c.3-.305 1.122-.902 1.997-.853M19.47 17.715c-2.036-.193-3.434 2.172-6.114 2.528"
    />
  </Svg>
);
export default IconlystUmbrellaWindLight;
