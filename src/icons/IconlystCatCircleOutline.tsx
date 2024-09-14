import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatCircleOutline = ({
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
      d="M12 22.05c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.55 12 2.55s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M9.87 17.831h-.1a.744.744 0 0 1-.64-.84c.06-.43.13-.9.22-1.4.05-.28 0-.52-.16-.7a.8.8 0 0 0-.62-.28c-.69 0-1.32-.32-1.77-.89-.5-.63-.73-1.54-.56-2.21a.75.75 0 0 1 .73-.57c.21 0 .44-.04.64-.52.55-1.33 1.63-1.71 2.42-1.82v-1.07c0-.25.12-.48.33-.62a.73.73 0 0 1 .7-.07c2.77 1.15 4.42 3.49 4.42 6.28v.81c0 .27.27.5.53.6.43.17.98.41 1.5.78a.753.753 0 1 1-.87 1.23c-.39-.28-.82-.47-1.19-.61-.89-.36-1.47-1.14-1.47-1.99v-.81c0-1.79-.9-3.36-2.45-4.36v.54c0 .41-.34.75-.75.75-1.16 0-1.55.37-1.78.94-.27.65-.7 1.1-1.26 1.31.05.16.13.33.25.49.25.32.5.32.59.32.69 0 1.34.3 1.77.82.44.52.61 1.21.49 1.93-.09.48-.15.93-.21 1.34-.05.38-.37.65-.74.65z"
    />
    <Path
      fill={props.color}
      d="M10.97 12.35c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.75-.34.76-.75.76z"
    />
  </Svg>
);
export default IconlystCatCircleOutline;
