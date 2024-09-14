import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoMenuLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 18.766a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12.5 4.766a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12.5 11.766a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoMenuLight;
