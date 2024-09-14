import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.437 17.79a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02M12.437 11.766a1.01 1.01 0 1 1 0 2.021 1.01 1.01 0 0 1 0-2.021M12.437 5.746a1.01 1.01 0 1 1 0 2.022 1.01 1.01 0 0 1 0-2.022"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMenuOutline;
