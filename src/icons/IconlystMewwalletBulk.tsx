import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMewwalletBulk = ({
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
      d="M12.5 2.504c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.524 14.765a.75.75 0 0 0 .671-.415 5.28 5.28 0 0 0-.837-5.904 5.305 5.305 0 0 0-5.806-1.32.75.75 0 0 0 .553 1.396 3.79 3.79 0 0 1 4.152.94c.86.936 1.173 2.296.86 3.51l-3.28-1.638a.75.75 0 0 0-1.006.336.75.75 0 0 0 .335 1.006l4.023 2.01a.74.74 0 0 0 .334.079M12.519 17.249a5.2 5.2 0 0 0 1.931-.367.75.75 0 0 0-.552-1.394 3.78 3.78 0 0 1-4.152-.941 3.78 3.78 0 0 1-.599-4.218.75.75 0 0 0-1.342-.669 5.29 5.29 0 0 0 .836 5.903 5.27 5.27 0 0 0 3.877 1.686"
    />
  </Svg>
);
export default IconlystMewwalletBulk;
