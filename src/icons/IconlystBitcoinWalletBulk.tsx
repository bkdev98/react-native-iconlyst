import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinWalletBulk = ({
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
      d="M15.303 11.106a3.284 3.284 0 0 1 3.282-3.28h4.005a.29.29 0 0 0 .291-.302 5.443 5.443 0 0 0-5.424-5.108H9.33a5.444 5.444 0 0 0-5.436 5.44v.987a.31.31 0 0 0 .29.306c3.954.293 7.074 3.585 7.074 7.616 0 1.003-.198 1.959-.551 2.836-.083.204.063.434.284.434h6.467a5.45 5.45 0 0 0 5.32-4.313c.072-.343.102-.689.112-1.037a.294.294 0 0 0-.296-.3h-4.008a3.284 3.284 0 0 1-3.282-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.733 11.796h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75m-.148-2.47c-.982 0-1.782.8-1.782 1.78 0 .982.8 1.78 1.782 1.78h4.008a.3.3 0 0 0 .3-.3v-2.96a.3.3 0 0 0-.3-.3zM5.745 18.885a.82.82 0 0 1-.613.27H3.607v-1.66h1.457c.461 0 .853.325.893.74a.83.83 0 0 1-.212.65m-2.138-4.55h1.457c.461 0 .853.325.893.741a.833.833 0 0 1-.825.918H3.607zm3.844.598c-.108-1.114-1.058-1.99-2.199-2.08v-.208a.75.75 0 0 0-1.5 0v.19h-.895a.75.75 0 0 0-.75.75v6.32c0 .415.336.75.75.75h.895v.18a.75.75 0 0 0 1.5 0v-.193a2.32 2.32 0 0 0 1.602-.748c.442-.485.66-1.14.597-1.801a2.25 2.25 0 0 0-.629-1.334l.031-.027c.443-.488.66-1.142.598-1.798"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinWalletBulk;
