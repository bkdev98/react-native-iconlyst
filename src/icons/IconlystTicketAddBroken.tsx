import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketAddBroken = ({
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
      d="M16.196 17.334h1.422m0 0h1.421m-1.421 0v1.421m0-1.421v-1.422M13.645 9.55l1.763 1.764M9.885 5.813l1.737 1.737M18.885 13.861l.865-.865c.634-.634.95-.95 1.134-1.284a2.68 2.68 0 0 0 0-2.582c-.184-.334-.5-.65-1.134-1.284-.136-.136-.204-.204-.253-.236-.169-.114-.19-.119-.393-.098-.058.007-.243.064-.611.178a1.56 1.56 0 0 1-1.58-.39 1.55 1.55 0 0 1-.387-1.577c.114-.368.172-.552.178-.61.022-.203.016-.225-.097-.394-.032-.049-.1-.117-.237-.253-.634-.634-.95-.951-1.285-1.135a2.68 2.68 0 0 0-2.58 0c-.334.184-.651.5-1.285 1.135l-3.27 3.27M4.68 11.004c-.633.633-.95.949-1.133 1.282a2.68 2.68 0 0 0 .001 2.586c.184.333.5.649 1.134 1.28.135.136.203.204.251.236.17.113.191.119.394.097.058-.006.241-.063.608-.176a1.56 1.56 0 0 1 1.578.39l.034.034c.39.42.507.996.358 1.509-.117.398-.175.598-.18.654-.02.209-.018.215.099.389.032.047.1.116.238.253.63.63.946.946 1.278 1.13a2.68 2.68 0 0 0 2.587 0c.332-.184.648-.5 1.279-1.13l.95-.95"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.618 21.001a3.667 3.667 0 1 1 2.687-1.172"
    />
  </Svg>
);
export default IconlystTicketAddBroken;
