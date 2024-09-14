import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGPSBold = ({
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
      d="M17.942 15.489h-1.163a.75.75 0 0 1 0-1.5h1.163a.62.62 0 0 0 0-1.24h-.196a2.12 2.12 0 0 1-2.119-2.12c0-1.168.951-2.12 2.119-2.12h1.163a.75.75 0 0 1 0 1.5h-1.163a.62.62 0 0 0 0 1.24h.196c1.168 0 2.119.95 2.119 2.12 0 1.169-.951 2.12-2.119 2.12m-5.163-2.192h-.6v1.442a.75.75 0 0 1-1.5 0v-5.48a.75.75 0 0 1 .75-.75h1.35a2.397 2.397 0 0 1 2.394 2.395 2.397 2.397 0 0 1-2.394 2.393m-3.125.2c0 1.247-.865 1.99-2.314 1.99a3.2 3.2 0 0 1-2.328-.977c-.654-.681-1.004-1.66-.962-2.682A3.56 3.56 0 0 1 5.2 9.366a3.2 3.2 0 0 1 2.315-.852c.481.025.942.145 1.372.357a.75.75 0 0 1-.664 1.346 2 2 0 0 0-.783-.205 1.75 1.75 0 0 0-1.228.462c-.399.364-.64.879-.663 1.416-.025.618.173 1.194.546 1.582a1.68 1.68 0 0 0 1.245.515c.814 0 .814-.26.814-.49v-.748H7.34a.75.75 0 0 1 0-1.5h1.564a.75.75 0 0 1 .75.75zm8.279-9.823H6.067C3.336 3.674 1.5 5.593 1.5 8.448v7.103c0 2.855 1.836 4.774 4.567 4.774h11.865c2.733 0 4.568-1.92 4.568-4.774V8.448c0-2.855-1.835-4.774-4.567-4.774"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.779 10.01h-.6v1.786h.6a.894.894 0 1 0 0-1.786"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGPSBold;
