import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper4Broken = ({
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
      d="M6.68 12.006v-.01M17.322 12.006v-.01M12 19.05H6.188C4.228 19.05 3 17.661 3 15.699V8.3c0-1.963 1.223-3.35 3.188-3.35h11.623C19.777 4.95 21 6.336 21 8.3V15.7c0 1.963-1.223 3.35-3.188 3.35h-2.906"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.001 9.71a2.288 2.288 0 1 0 2.048 1.267"
    />
  </Svg>
);
export default IconlystMoneyPaper4Broken;
