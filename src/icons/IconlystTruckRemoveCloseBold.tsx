import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRemoveCloseBold = ({
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
      d="M18.598 13.164h1.652v1.94c0 .733-.596 1.33-1.329 1.33h-.17l-.001-.004c-.25-.86-.93-1.55-1.8-1.8V9.157l2.343 1.036c.581.25.957.828.957 1.47h-1.652a.75.75 0 0 0 0 1.5M16.2 18.35c-.55 0-1-.37-1.13-.87-.03-.1-.04-.2-.04-.3 0-.36.16-.68.42-.89.2-.17.46-.27.75-.27s.55.1.75.28a1.163 1.163 0 0 1-.75 2.05m-4.621-7.026a.749.749 0 1 1-1.061 1.06l-.92-.92-.92.92a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l.92-.92-.92-.92a.749.749 0 1 1 1.06-1.06l.92.919.92-.92a.75.75 0 0 1 1.061 1.06l-.92.92zm-3.36 5.862c0 .028 0 .056-.009.084-.04.61-.54 1.08-1.16 1.08-.63 0-1.15-.51-1.16-1.15v-.02c0-.64.52-1.16 1.16-1.16.65 0 1.169.519 1.17 1.159l-.001.005zm11.675-8.368L16.95 7.517V6.98c0-1.56-1.27-2.83-2.83-2.83H5.05c-1.55 0-2.8 1.26-2.8 2.8v8.15c0 1.35.96 2.49 2.23 2.76a2.661 2.661 0 0 0 5.128.074h4.033A2.67 2.67 0 0 0 16.2 19.85a2.654 2.654 0 0 0 2.548-1.916h.173c1.56 0 2.829-1.27 2.829-2.83v-3.44c0-1.242-.731-2.36-1.856-2.846"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckRemoveCloseBold;
