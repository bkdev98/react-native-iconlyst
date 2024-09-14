import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoComBold = ({
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
      d="m17.75 13.789-2.21 3.84a.25.25 0 0 1-.217.126h-.873a.25.25 0 0 1-.168-.066l-1.051-.96a.25.25 0 0 1-.081-.184v-.5c0-.068.028-.133.077-.181l1.007-.966v-1.533c0-.084.042-.163.113-.21l1.424-.93a.245.245 0 0 1 .287.01l1.626 1.23a.25.25 0 0 1 .066.324m-4.946.063a.25.25 0 0 1-.186.083h-1.284a.25.25 0 0 1-.249-.277l.143-1.36-.95-1.22a.249.249 0 0 1 .197-.403h3.052a.25.25 0 0 1 .194.408l-.992 1.219.138 1.357a.25.25 0 0 1-.063.193m-1.932 2.683a.25.25 0 0 1-.08.184l-1.049.969a.25.25 0 0 1-.17.067h-.886a.25.25 0 0 1-.217-.125l-2.22-3.861a.25.25 0 0 1 .068-.326l1.629-1.21a.25.25 0 0 1 .284-.01l1.439.92a.25.25 0 0 1 .115.21v1.535l1.01.966a.25.25 0 0 1 .077.18zM9.072 6.5a.25.25 0 0 1 .242-.186h5.338c.112 0 .21.075.241.183l.644 2.3a.25.25 0 0 1-.241.317H8.703a.25.25 0 0 1-.242-.313zm12.225 4.675-3.99-6.907a1.51 1.51 0 0 0-1.316-.763H8.009a1.51 1.51 0 0 0-1.314.76l-3.993 6.913a1.52 1.52 0 0 0 .001 1.516l3.99 6.907c.266.47.771.764 1.316.764h7.982a1.51 1.51 0 0 0 1.314-.761l3.99-6.907a1.53 1.53 0 0 0 .002-1.522"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCryptoComBold;
