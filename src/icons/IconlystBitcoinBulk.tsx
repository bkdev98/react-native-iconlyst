import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinBulk = ({
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
      d="M13.582 2a1 1 0 0 1 1 1v.906a5 5 0 0 0-1.43-.213h-.57V3a1 1 0 0 1 1-1M11.434 3.693V3a1 1 0 1 0-2 0v.693zM9.434 20.4v.6a1 1 0 1 0 2 0v-.6zM10.404 18.4h.059zM12.582 20.4v.6a1 1 0 1 0 2 0v-.775a4.7 4.7 0 0 1-1.273.176z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.014 4.693a1 1 0 0 1 1-1h5.137c2.379 0 4.576 1.741 4.814 4.221a4.67 4.67 0 0 1-1.797 4.158c.98.75 1.67 1.867 1.797 3.196a4.68 4.68 0 0 1-4.656 5.133H8.014a1 1 0 0 1-1-1zm8.96 10.765a2.68 2.68 0 0 1-2.665 2.943H9.014v-5.354h4.188c1.44.025 2.645 1.083 2.772 2.411m0-7.353a2.68 2.68 0 0 1-2.665 2.942H9.014V5.693h4.137c1.463 0 2.694 1.068 2.823 2.412"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBitcoinBulk;
