import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationPlusBold = ({
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
      d="M12.83 13.68c0-3.296 2.8-5.979 6.047-5.91a.42.42 0 0 0 .41-.28l.283-.846a2.37 2.37 0 0 0-.583-2.45 2.37 2.37 0 0 0-2.455-.562l-12.11 4.17a2.365 2.365 0 0 0-1.61 2.191 2.365 2.365 0 0 0 1.49 2.274l4.164 1.687c.341.137.618.411.758.753l1.786 4.32a2.365 2.365 0 0 0 2.201 1.472h.087c1.027-.036 1.756-.677 2.14-1.555.074-.168.004-.359-.145-.466a5.9 5.9 0 0 1-2.463-4.799"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.439 12.492h-1.754v-1.75a.75.75 0 0 0-1.5 0v1.75h-1.752a.75.75 0 0 0 0 1.5h1.752v1.756a.75.75 0 0 0 1.5 0v-1.756h1.754a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationPlusBold;
