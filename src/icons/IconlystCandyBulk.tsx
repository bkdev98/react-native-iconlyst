import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.513 8.878c-.32.92-1.6 1.33-2.87 1.4a7.07 7.07 0 0 0-4.54-4.5c.02-1.23.38-2.44 1.24-2.78.72-.29 1.43.08 2.13 1.07.96-.48 1.86-.51 2.45-.04.65.52.77 1.43.36 2.71 1.07.67 1.49 1.39 1.23 2.14M9.903 19.328c-.01 1.27-.36 2.56-1.25 2.91-.15.06-.31.09-.47.09-.56 0-1.11-.39-1.66-1.16-.96.48-1.86.51-2.45.04-.65-.52-.77-1.43-.36-2.71-1.07-.67-1.48-1.39-1.23-2.14.31-.9 1.55-1.31 2.79-1.39.76 2.1 2.48 3.72 4.63 4.36"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M18.03 12.533a6.103 6.103 0 1 1-12.207 0 6.103 6.103 0 0 1 12.206 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.03 11.701a.746.746 0 0 0-.92-.53l-1.122.3.3-1.123a.75.75 0 0 0-1.448-.388l-.301 1.123-.822-.822a.75.75 0 0 0-1.061 1.06l.822.822-1.123.301a.752.752 0 0 0 .195 1.475.7.7 0 0 0 .194-.026l1.123-.3-.301 1.123a.752.752 0 0 0 .725.944.75.75 0 0 0 .724-.556l.3-1.123.823.822a.75.75 0 0 0 1.06-1.061l-.821-.822 1.123-.3a.75.75 0 0 0 .53-.919"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandyBulk;
