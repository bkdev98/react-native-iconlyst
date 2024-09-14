import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLTECircleBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.917 11.14a.75.75 0 0 1 0 1.5h-.976v.721h1.408a.75.75 0 0 1 0 1.5H15.19a.75.75 0 0 1-.75-.75v-4.43a.75.75 0 0 1 .75-.75h2.158a.75.75 0 0 1 0 1.5H15.94v.71zm-3.94-.71h-.725v3.681a.75.75 0 0 1-1.5 0v-3.68h-.727a.75.75 0 0 1 0-1.5h2.953a.75.75 0 0 1 0 1.5m-4.152 4.431H7.039a.75.75 0 0 1-.75-.75v-4.43a.75.75 0 0 1 1.5 0v3.68h1.036a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLTECircleBulk;
