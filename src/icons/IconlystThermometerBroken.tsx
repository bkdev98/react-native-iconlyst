import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThermometerBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.112 8.006-3.788 3.787a2.1 2.1 0 0 0-.6 1.237l-.225 1.894a2.1 2.1 0 0 1-.6 1.236l-1.29 1.29a2.08 2.08 0 1 0 2.942 2.94l1.29-1.288a2.1 2.1 0 0 1 1.236-.6l1.893-.226a2.1 2.1 0 0 0 1.237-.6l7.575-7.574a4.16 4.16 0 0 0-5.883-5.883l-.714.714M11.863 14.188l1.917 1.917M14.313 11.736l1.917 1.917M16.793 9.318l1.887 1.886"
    />
  </Svg>
);
export default IconlystThermometerBroken;
