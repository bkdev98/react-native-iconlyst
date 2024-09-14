import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M14.66 17.58c-.71 0-1.36-.28-1.78-.61-.3-.18-.61-.44-.88-.68-.27.25-.58.5-.88.68-.79.62-2.39 1.06-3.72-.21-.57-.54-1.38-1.73-.42-3.66.24-.48 2.83-5.48 2.83-5.48A2.47 2.47 0 0 1 12 6.27c.92 0 1.77.52 2.2 1.36 0 0 2.58 5 2.81 5.46.97 1.94.16 3.14-.41 3.68-.63.6-1.31.81-1.94.81m-1.61-2.36c.24.21.46.38.63.48.04.02.08.05.11.08 0 0 .9.73 1.77-.1.48-.46.52-1.08.11-1.9-.24-.48-2.82-5.46-2.82-5.46-.35-.67-1.38-.67-1.72 0 0 0-2.58 4.98-2.81 5.44-.42.84-.38 1.46.1 1.92.88.84 1.77.11 1.78.1.03-.03.07-.06.11-.08.17-.1.39-.26.63-.48-.58-.63-1.18-1.4-1.18-2.43 0-1.24 1-2.24 2.24-2.24s2.24 1 2.24 2.24c0 1.03-.6 1.8-1.18 2.43zM12 12.05c-.41 0-.74.33-.74.74 0 .48.34.93.74 1.36.4-.43.74-.88.74-1.36 0-.41-.33-.74-.74-.74"
    />
  </Svg>
);
export default IconlystAirbnbCircleOutline;
