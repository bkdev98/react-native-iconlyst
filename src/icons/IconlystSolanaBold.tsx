import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolanaBold = ({
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
      d="M14.784 11.38H8.652l.563 1.24h6.133zM14.783 9.88l.547-1.15H9.21l-.546 1.15z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.256 13.433a.8.8 0 0 1-.056.243c-.004.009-.002.018-.006.026l-1.255 2.64a.75.75 0 0 1-.677.427h-7.78a.75.75 0 0 1-.678-1.072l1.105-2.324-1.105-2.431a.74.74 0 0 1-.072-.312l.001-.008c0-.043.018-.082.025-.124.011-.058.016-.118.04-.17.004-.01.002-.021.006-.03l1.255-2.641a.75.75 0 0 1 .678-.428h7.78a.75.75 0 0 1 .677 1.073l-1.105 2.325 1.101 2.422a.74.74 0 0 1 .079.321q-.002.006-.003.013c0 .017-.009.033-.01.05M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.215 14.12-.546 1.15h6.12l.545-1.15z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSolanaBold;
