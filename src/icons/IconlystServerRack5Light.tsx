import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack5Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.726 21h10.548a3.69 3.69 0 0 0 0-7.38H6.726a3.69 3.69 0 0 0 0 7.38M15.648 13.723v7.175M7.395 17.31h1.491M6.726 10.381h10.548a3.69 3.69 0 0 0 0-7.381H6.726a3.69 3.69 0 0 0 0 7.381M15.648 3.104v7.175M7.395 6.69h1.491"
    />
  </Svg>
);
export default IconlystServerRack5Light;
