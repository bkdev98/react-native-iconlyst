import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetflixCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.75 8.4c0-.911.739-1.65 1.65-1.65h1.488c.493 0 .96.22 1.273.6l5.917 7.173a.75.75 0 0 1-1.156.954l-5.918-7.172a.15.15 0 0 0-.116-.055H8.4a.15.15 0 0 0-.15.15v7.2c0 .083.067.15.15.15h1.2a.15.15 0 0 0 .15-.15v-2.964a.75.75 0 0 1 1.5 0V15.6a1.65 1.65 0 0 1-1.65 1.65H8.4a1.65 1.65 0 0 1-1.65-1.65z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 8.4c0-.911.739-1.65 1.65-1.65h1.2c.911 0 1.65.739 1.65 1.65v7.2a1.65 1.65 0 0 1-1.65 1.65h-1.488c-.493 0-.96-.22-1.273-.6L6.921 9.477a.75.75 0 1 1 1.158-.954l5.917 7.172a.15.15 0 0 0 .116.055H15.6a.15.15 0 0 0 .15-.15V8.4a.15.15 0 0 0-.15-.15h-1.2a.15.15 0 0 0-.15.15v2.962a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNetflixCircleOutline;
