import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMongodbTwoTone = ({
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
      d="M3.5 10.204C3.5 16.166 9.442 21 12 21s8.5-4.834 8.5-10.796v-1.52a4.04 4.04 0 0 0-1.487-3.121 10.88 10.88 0 0 0-14.026 0A4.04 4.04 0 0 0 3.5 8.684z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.756 11.064C8.722 13.447 10.904 15.18 12 15.75c1.095-.57 3.278-2.303 3.243-4.686C15.21 8.68 13.067 7.194 12 6.75c-1.067.445-3.21 1.93-3.244 4.314M12 17.25v-5.29"
    />
  </Svg>
);
export default IconlystMongodbTwoTone;
