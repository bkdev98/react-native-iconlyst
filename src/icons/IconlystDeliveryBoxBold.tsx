import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxBold = ({
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
      d="M11.009 19.424h-.02c-.3 0-.55-.23-.56-.53-.01-.198.099-.366.256-.476q.01-.003.02-.004h.004c.03-.02.05-.04.08-.05.06-.02.12-.04.18-.04h.01c.22 0 .42.14.51.33.01.01.01.01.01.02.02.06.04.12.04.19.01.3-.23.56-.53.56m9.876-4.515a.75.75 0 0 0-.976-.416l-7.441 2.99a2.09 2.09 0 0 0-1.55-.659h-.047L6.588 6.247a.75.75 0 0 0-.485-.438L4.022 5.2A.75.75 0 0 0 3.6 6.638l1.733.508L9.51 17.462l-.002.002c-.37.39-.6.91-.58 1.48.04 1.1.95 1.98 2.06 1.98h.06c1.11-.03 1.99-.95 1.99-2.05v-.005l7.429-2.985a.75.75 0 0 0 .417-.975"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.519 6.145 1.18-.45c.39-.14.82.05.97.44.14.38-.05.82-.44.96l-1.17.45c-.09.04-.18.05-.27.05-.3 0-.59-.18-.7-.48a.75.75 0 0 1 .43-.97m.11 8.15c.37.92 1.12 1.45 1.97 1.45.27 0 .55-.05.83-.16l2.68-1.04c.57-.21.98-.59 1.2-1.09.23-.52.23-1.14-.01-1.75l-2.94-7.18c-.47-1.21-1.61-1.74-2.79-1.29l-2.68 1.04c-.57.21-.98.59-1.2 1.09-.23.51-.23 1.13.01 1.74z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxBold;
