import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotBold = ({
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
      d="M18.64 13.868v-2.064c.468.12.822.526.822 1.031 0 .506-.354.912-.822 1.033M4.538 12.835c0-.504.354-.911.822-1.031v2.064a1.07 1.07 0 0 1-.822-1.033m8.922-1.825V11a.749.749 0 1 1 .75.75.74.74 0 0 1-.75-.74m-3.5 3.21c.16-.38.61-.55.99-.38.71.31 1.39.31 2.1 0 .38-.17.83 0 .99.38.17.38-.01.82-.39.99-.54.24-1.1.36-1.65.36s-1.11-.12-1.65-.36a.75.75 0 0 1-.39-.99M9.04 11a.749.749 0 1 1 .75.75c-.41 0-.75-.33-.75-.74zM12 3.75c.27 0 .49.22.49.48a.49.49 0 0 1-.487.49L12 4.719l-.003.001a.483.483 0 0 1-.477-.49c0-.26.21-.48.48-.48m8.962 9.085a2.58 2.58 0 0 0-2.371-2.563l-.001-.012c-.26-1.97-1.68-3.25-3.71-3.25h-2.13v-.94c.72-.3 1.24-1.01 1.24-1.84 0-1.09-.9-1.98-1.99-1.98a1.985 1.985 0 0 0-.75 3.82v.94H9.12c-2.03 0-3.45 1.28-3.71 3.25l-.001.012a2.58 2.58 0 0 0-2.371 2.563 2.58 2.58 0 0 0 2.351 2.563l.001.012c.19 2.07 1.64 3.43 3.73 3.43h5.76c2.09 0 3.54-1.36 3.73-3.43l.001-.012a2.58 2.58 0 0 0 2.351-2.563M15.343 20.25H8.658a.75.75 0 0 0 0 1.5h6.685a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBotBold;
