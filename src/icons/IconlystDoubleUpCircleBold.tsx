import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleUpCircleBold = ({
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
      d="m15.53 15.22-2.999-3a.75.75 0 0 0-1.061 0l-3.001 3a.75.75 0 1 0 1.061 1.061l2.471-2.47 2.468 2.47a.75.75 0 1 0 1.061-1.061m0-5.25-2.999-3a.75.75 0 0 0-1.061 0l-3.001 3a.75.75 0 1 0 1.061 1.061l2.471-2.47 2.468 2.47A.75.75 0 1 0 15.53 9.97M12 21.5c-5.239 0-9.5-4.261-9.5-9.5S6.761 2.5 12 2.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleUpCircleBold;
