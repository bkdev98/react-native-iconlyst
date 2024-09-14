import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlipVerticalBulk = ({
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
      d="M10 4.5H8.73a.5.5 0 0 0-.462.311l-5.731 14A.5.5 0 0 0 3 19.5h7a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.463 18.811-5.73-14a.5.5 0 0 0-.463-.311H14a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .463-.689"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlipVerticalBulk;
