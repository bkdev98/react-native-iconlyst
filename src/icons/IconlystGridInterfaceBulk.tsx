import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceBulk = ({
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
      d="M12.277 10.85c0 .22.179.4.4.4H21.6a.4.4 0 0 0 .4-.4V8.026C22 4.721 19.877 2.5 16.716 2.5h-4.04a.4.4 0 0 0-.4.4zM12.677 12.75a.4.4 0 0 0-.4.4v7.95c0 .22.179.4.4.4h4.039c3.16 0 5.284-2.221 5.284-5.526V13.15a.4.4 0 0 0-.4-.4z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.777 2.9a.4.4 0 0 0-.4-.4H8.283C5.123 2.5 3 4.721 3 8.026v7.948C3 19.279 5.123 21.5 8.283 21.5h2.094a.4.4 0 0 0 .4-.4z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGridInterfaceBulk;
