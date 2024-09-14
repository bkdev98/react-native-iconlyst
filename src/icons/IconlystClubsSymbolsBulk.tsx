import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubsSymbolsBulk = ({
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
      d="M12 21.516V2.484c.351-.001.707.04 1.059.127 1.513.373 2.766 1.573 3.19 3.057a4.4 4.4 0 0 1-.268 3.153 4.3 4.3 0 0 1 1.904.335c2.15.922 3.228 3.442 2.4 5.618a4.43 4.43 0 0 1-4.103 2.862 6.9 6.9 0 0 1-1.914-.23c.399 1.783 1.838 3.24 1.854 3.256a.501.501 0 0 1-.353.854z"
    />
    <Path
      fill={props.color}
      d="M12 21.516V2.484a4.3 4.3 0 0 0-1.06.127c-1.513.373-2.766 1.573-3.191 3.057a4.4 4.4 0 0 0 .269 3.153 4.3 4.3 0 0 0-1.904.335c-2.151.922-3.228 3.442-2.401 5.618a4.43 4.43 0 0 0 4.104 2.862 6.9 6.9 0 0 0 1.914-.23c-.4 1.783-1.838 3.24-1.854 3.256a.501.501 0 0 0 .353.854z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystClubsSymbolsBulk;
