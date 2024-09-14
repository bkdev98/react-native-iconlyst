import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlipHorizontalBold = ({
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
      d="M19 13.5H5a.5.5 0 0 0-.5.5v7a.498.498 0 0 0 .689.463l14-5.731a.5.5 0 0 0 .31-.462V14a.5.5 0 0 0-.5-.5M19.19 8.267l-14-5.73A.5.5 0 0 0 4.5 3v7c0 .277.223.5.5.5h14a.5.5 0 0 0 .5-.5V8.73a.5.5 0 0 0-.31-.463"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlipHorizontalBold;
