import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningSquintingBold = ({
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
      d="M16.9 9.696a.75.75 0 1 1-.795 1.271l-1.787-1.118a.75.75 0 0 1 .001-1.272l1.787-1.112a.75.75 0 0 1 1.033.241.75.75 0 0 1-.24 1.032l-.767.478zm-4.901 7.526c-1.858 0-3.37-1.608-3.37-3.584a.5.5 0 0 1 .5-.5h5.738a.5.5 0 0 1 .5.5c0 1.976-1.511 3.584-3.368 3.584m-4.502-6.14a.75.75 0 0 1-.399-1.386l.768-.48-.767-.478a.75.75 0 1 1 .793-1.273l1.787 1.112a.75.75 0 0 1 .001 1.272l-1.787 1.118a.74.74 0 0 1-.396.115M12 2.5c-5.239 0-9.5 4.261-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrinningSquintingBold;
