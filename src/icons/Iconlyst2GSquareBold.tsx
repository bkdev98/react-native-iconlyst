import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst2GSquareBold = ({
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
      d="M12.795 11.25a.75.75 0 0 1 0 1.5h-1.369v1.21h1.896a.75.75 0 0 1 0 1.5h-2.646a.75.75 0 0 1-.75-.75V9.29a.75.75 0 0 1 .75-.75h2.646a.75.75 0 0 1 0 1.5h-1.896v1.21zm3.422-8.75H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst2GSquareBold;
