import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.038 7.188h3.653v1.5h-3.653zM11.958 10.799h4.735v1.5h-4.735zM12.998 19.083v4.271h-1.5v-4.271z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.248 4.354a2.954 2.954 0 0 0-2.945 2.963v5.174a2.954 2.954 0 0 0 2.945 2.961 2.953 2.953 0 0 0 2.946-2.961V7.317a2.954 2.954 0 0 0-2.946-2.963M7.803 7.317c0-2.462 1.987-4.463 4.445-4.463 2.46 0 4.446 2.002 4.446 4.463v5.174c0 2.46-1.987 4.461-4.446 4.461s-4.445-2-4.445-4.461z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.722 11.77v.75c0 3.628 2.925 6.563 6.527 6.563s6.529-2.935 6.529-6.563v-.75h1.5v.75c0 4.45-3.59 8.063-8.029 8.063-4.437 0-8.027-3.614-8.027-8.063v-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoice2Outlinesharp;
