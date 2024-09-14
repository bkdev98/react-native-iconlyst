import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 4.577a8.526 8.526 0 0 0-8.526 8.526c1.793.081 2.687.337 3.883 1.175 3.662-1.421 5.611-1.396 9.277 0 1.286-.942 2.164-1.143 3.892-1.175a8.526 8.526 0 0 0-8.526-8.526"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.54 8.337a9.2 9.2 0 0 1 .767 2.257M9.69 8.337a9.2 9.2 0 0 0-.769 2.257M12.114 13.238v6.099a1.664 1.664 0 1 1-3.327 0v-.308M12.114 3v1.577"
    />
  </Svg>
);
export default IconlystUmbrellaLight;
