import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsdCoinBulk = ({
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
      d="M12.501 2.5C7.262 2.5 3 6.761 3 12s4.262 9.5 9.501 9.5C17.738 21.5 22 17.238 22 12s-4.262-9.5-9.499-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.91 17.2a.75.75 0 0 0 .53-.22c1.317-1.317 2.043-3.088 2.043-4.985 0-1.9-.726-3.67-2.043-4.986a.75.75 0 1 0-1.061 1.06c1.034 1.034 1.604 2.429 1.604 3.926s-.57 2.89-1.604 3.924a.75.75 0 0 0 .53 1.28M13.25 16.45v-.446a2.39 2.39 0 0 0 2.037-2.355 2.4 2.4 0 0 0-2.393-2.4h-.788a.893.893 0 0 1-.894-.89c0-.49.4-.89.894-.89h1.96a.75.75 0 1 0 0-1.5h-.816v-.43a.75.75 0 0 0-1.5 0v.466a2.39 2.39 0 0 0-2.038 2.355 2.395 2.395 0 0 0 2.394 2.39h.788c.492 0 .893.403.893.899a.893.893 0 0 1-.893.89h-1.962a.75.75 0 0 0 0 1.5h.818v.41a.75.75 0 0 0 1.5 0M8.089 17.209a.751.751 0 0 0 .532-1.279c-2.122-2.131-2.122-5.731 0-7.861a.751.751 0 0 0-1.063-1.06c-2.74 2.752-2.74 7.228 0 9.98.147.147.339.22.53.22"
    />
  </Svg>
);
export default IconlystUsdCoinBulk;
