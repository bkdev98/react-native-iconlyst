import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchButtonOnBold = ({
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
      d="M18.288 13.42c0 1.354-.908 2.3-2.209 2.3h-3.015c-1.301 0-2.21-.946-2.21-2.3v-2.84c0-1.354.909-2.3 2.21-2.3h3.015c1.301 0 2.209.946 2.209 2.3zm-.705-8.35H6.416C4.074 5.07 2.5 6.714 2.5 9.16v5.68c0 2.446 1.574 4.09 3.917 4.09h11.166c2.343 0 3.917-1.644 3.917-4.09V9.16c0-2.446-1.574-4.09-3.917-4.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwitchButtonOnBold;
