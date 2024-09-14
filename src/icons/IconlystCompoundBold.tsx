import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompoundBold = ({
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
      d="M19.609 7.706c0-.084 0 .354-.013.27-.075-.468-.33-.81-.74-1.048q-2.575-1.493-5.15-2.99c-.741-.431-1.48-.865-2.225-1.29-.49-.281-1.066.045-1.067.603-.004 1.347-.002 2.246 0 3.594 0 .033.028.079.057.097.149.096.302.185.454.276l6.106 3.66c.51.306.758.754.758 1.347-.002 2.276-.001 4.029-.001 6.305v.118c.03-.014.05-.021.07-.031q.704-.383 1.41-.761a.595.595 0 0 0 .343-.571c-.002-3.343-.001-6.236-.002-9.58"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.317 12.56c-.093-.435-.351-.745-.735-.968q-2.741-1.596-5.48-3.195L8.23 7.304a.7.7 0 0 0-.494-.093c-.36.069-.582.349-.582.73-.001 1.393 0 2.262-.003 3.655 0 .092.03.138.106.184q2.452 1.462 4.902 2.929l1.483.888c.494.295.742.726.74 1.303q-.002 1.836 0 3.672v.118c.04-.02.063-.027.085-.04l1.58-.89a.56.56 0 0 0 .302-.533c-.002-2.288 0-4.052-.002-6.34 0-.11-.007-.22-.03-.326"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.218 16.335q-2.615-1.526-5.23-3.05-1.076-.627-2.149-1.255a.72.72 0 0 0-.543-.09.68.68 0 0 0-.539.674v3.351q-.001.063.004.126.11.843.837 1.29 1.256.766 2.51 1.534l4.532 2.774a.85.85 0 0 0 .427.14c.51.013.883-.352.884-.864v-3.359q-.004-.846-.733-1.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCompoundBold;
