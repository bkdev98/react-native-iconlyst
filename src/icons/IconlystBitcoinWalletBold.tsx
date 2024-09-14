import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinWalletBold = ({
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
      d="M14.803 11.106a3.284 3.284 0 0 1 3.282-3.28h4.005a.29.29 0 0 0 .291-.302 5.443 5.443 0 0 0-5.424-5.108H8.83a5.444 5.444 0 0 0-5.436 5.44v.988a.31.31 0 0 0 .29.305c3.954.293 7.074 3.586 7.074 7.616 0 1.004-.198 1.96-.551 2.837-.083.204.063.434.284.434h6.467a5.45 5.45 0 0 0 5.32-4.314c.072-.343.102-.688.112-1.036a.294.294 0 0 0-.296-.3h-4.008a3.284 3.284 0 0 1-3.282-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.233 11.796h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75m-.148-2.47c-.982 0-1.782.799-1.782 1.78 0 .982.8 1.78 1.782 1.78h4.008a.3.3 0 0 0 .3-.3v-2.96a.3.3 0 0 0-.3-.3zM5.245 18.884a.82.82 0 0 1-.613.271H3.107v-1.66h1.457c.461 0 .853.325.893.74a.83.83 0 0 1-.212.65m-2.138-4.549h1.457c.461 0 .853.325.893.741a.833.833 0 0 1-.825.918H3.107zm3.844.598c-.108-1.115-1.058-1.99-2.199-2.08v-.209a.75.75 0 0 0-1.5 0v.191h-.895a.75.75 0 0 0-.75.75v6.32c0 .414.336.75.75.75h.895v.18a.75.75 0 0 0 1.5 0v-.193a2.32 2.32 0 0 0 1.602-.749c.442-.485.66-1.14.597-1.8a2.25 2.25 0 0 0-.629-1.335q.016-.014.031-.027c.443-.487.66-1.142.598-1.798"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinWalletBold;
