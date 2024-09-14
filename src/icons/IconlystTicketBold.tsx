import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketBold = ({
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
      d="M14.849 10.93H9.151a.75.75 0 0 1 0-1.5h5.698a.75.75 0 0 1 0 1.5m0 3.64H9.151a.75.75 0 0 1 0-1.5h5.698a.75.75 0 0 1 0 1.5m5.662-7.253a1.26 1.26 0 0 1-1.261-1.26v-.105c0-.562-.456-1.018-1.017-1.018H5.768c-.562 0-1.018.456-1.018 1.018v.105c0 .695-.565 1.26-1.26 1.26a.99.99 0 0 0-.99.99v7.389a.99.99 0 0 0 .99.989c.695 0 1.26.565 1.26 1.26v.106c0 .56.456 1.018 1.018 1.018h12.465c.561 0 1.017-.457 1.017-1.018v-.105c0-.696.566-1.261 1.261-1.261a.99.99 0 0 0 .989-.99V8.308a.99.99 0 0 0-.989-.99"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.849 10.93H9.151a.75.75 0 0 1 0-1.5h5.698a.75.75 0 0 1 0 1.5m0 3.64H9.151a.75.75 0 0 1 0-1.5h5.698a.75.75 0 0 1 0 1.5m5.662-7.253a1.26 1.26 0 0 1-1.261-1.26v-.105c0-.562-.456-1.018-1.017-1.018H5.768c-.562 0-1.018.456-1.018 1.018v.105c0 .695-.565 1.26-1.26 1.26a.99.99 0 0 0-.99.99v7.389a.99.99 0 0 0 .99.989c.695 0 1.26.565 1.26 1.26v.106c0 .56.456 1.018 1.018 1.018h12.465c.561 0 1.017-.457 1.017-1.018v-.105c0-.696.566-1.261 1.261-1.261a.99.99 0 0 0 .989-.99V8.308a.99.99 0 0 0-.989-.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketBold;
