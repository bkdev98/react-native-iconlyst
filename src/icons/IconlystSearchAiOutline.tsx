import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchAiOutline = ({
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
      d="M11.632 3.75a7.668 7.668 0 1 0 .001 15.336 7.668 7.668 0 0 0 0-15.336m-9.167 7.668a9.167 9.167 0 0 1 9.167-9.168 9.167 9.167 0 0 1 9.168 9.168 9.168 9.168 0 1 1-18.335 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.83 17.054a.75.75 0 0 1 1.061-.001l3.425 3.416a.75.75 0 0 1-1.06 1.062l-3.424-3.416a.75.75 0 0 1-.002-1.06M9.687 13.712a.75.75 0 0 1-.704-.49l-.101-.273a3.01 3.01 0 0 0-1.779-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.779-1.782l.101-.274a.75.75 0 0 1 1.407 0l.101.274a3.01 3.01 0 0 0 1.779 1.781l.273.101a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.101.273a.75.75 0 0 1-.703.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.95.95c.363.267.682.587.95.95.267-.363.587-.683.948-.95M14.997 14.954a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.099.326.353.58.677.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.677.68.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchAiOutline;
