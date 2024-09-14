import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdAddBold = ({
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
      d="M18.304 2.762H8.234c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M3.768 11.969c0 .185.168.345.354.344h.132c3.45 0 5.954 2.528 5.954 5.978v.008c-.002.195.179.384.374.384h7.726c2.67 0 4.46-1.88 4.46-4.67v-4.4a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3zM7.351 17.053H5.416V15.12a.75.75 0 0 0-1.5 0v1.934H1.981a.75.75 0 1 0 0 1.5h1.935v1.933a.747.747 0 0 0 .75.75.75.75 0 0 0 .75-.75v-1.933h1.935a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdAddBold;
