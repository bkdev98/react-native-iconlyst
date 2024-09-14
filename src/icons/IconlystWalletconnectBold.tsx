import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletconnectBold = ({
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
      d="m17.03 13.285-2.25 2.25a.75.75 0 0 1-1.06 0L12 13.815l-1.72 1.72a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.061l1.72 1.72 1.72-1.72a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06m-8.746-3.49a5.3 5.3 0 0 1 3.72-1.551c1.382 0 2.737.565 3.718 1.55a.75.75 0 0 1-1.063 1.059 3.78 3.78 0 0 0-2.655-1.11 3.78 3.78 0 0 0-2.657 1.11.749.749 0 1 1-1.063-1.058M12 2.505c-5.239 0-9.5 4.26-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletconnectBold;
