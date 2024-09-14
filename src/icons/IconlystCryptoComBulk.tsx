import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoComBulk = ({
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
      d="m21.797 11.175-3.99-6.907a1.51 1.51 0 0 0-1.316-.763H8.509a1.51 1.51 0 0 0-1.314.76l-3.993 6.913a1.52 1.52 0 0 0 .001 1.516l3.99 6.907c.266.47.771.764 1.316.764h7.982a1.51 1.51 0 0 0 1.314-.761l3.99-6.907a1.53 1.53 0 0 0 .002-1.522"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m16.04 17.629 2.21-3.842a.25.25 0 0 0-.066-.324l-1.626-1.23a.245.245 0 0 0-.287-.008l-1.424.93a.25.25 0 0 0-.113.209v1.532l-1.007.966a.25.25 0 0 0-.077.182v.5c0 .07.029.136.081.183l1.051.96a.25.25 0 0 0 .168.066h.873c.09 0 .172-.047.217-.125M13.118 13.934a.252.252 0 0 0 .249-.276l-.138-1.358.992-1.219a.25.25 0 0 0-.194-.407h-3.052a.25.25 0 0 0-.197.402l.95 1.221-.143 1.36a.25.25 0 0 0 .249.277zM11.292 16.718a.25.25 0 0 0 .08-.184v-.5a.25.25 0 0 0-.077-.181l-1.01-.966v-1.535a.25.25 0 0 0-.115-.21l-1.439-.92a.25.25 0 0 0-.284.01l-1.629 1.21a.25.25 0 0 0-.068.325l2.22 3.861a.25.25 0 0 0 .217.125h.886a.25.25 0 0 0 .17-.067zM9.814 6.313a.25.25 0 0 0-.242.186l-.611 2.3a.25.25 0 0 0 .242.314h6.593a.25.25 0 0 0 .241-.316l-.644-2.302a.25.25 0 0 0-.241-.183z"
    />
  </Svg>
);
export default IconlystCryptoComBulk;
