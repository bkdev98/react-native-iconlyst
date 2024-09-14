import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunglassesLight = ({
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
      d="M12.022 20.804a8.804 8.804 0 1 0 0-17.609 8.804 8.804 0 0 0 0 17.609"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.395 11.786h-2.243a.71.71 0 0 1-.705-.613l-.293-2.084a.713.713 0 0 1 .705-.812h2.794c.429 0 .76.375.707.8l-.258 2.084a.71.71 0 0 1-.707.625M9.926 11.786H7.682a.71.71 0 0 1-.705-.613l-.293-2.084a.713.713 0 0 1 .705-.812h2.795c.428 0 .759.375.707.8l-.26 2.084a.71.71 0 0 1-.705.625"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.203 15.031c.686.893 1.696 1.45 2.817 1.45.836 0 1.609-.309 2.233-.836M17.25 9.969H21m-14.194 0H3M13.284 9.969H10.78"
    />
  </Svg>
);
export default IconlystSunglassesLight;
