import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber0Light = ({
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
      d="M12.5 20.383c2.486 0 4.5-2.048 4.5-4.572V8.954c0-2.525-2.014-4.571-4.5-4.571-2.484 0-4.5 2.046-4.5 4.571v6.857c0 2.524 2.016 4.572 4.5 4.572"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber0Light;
