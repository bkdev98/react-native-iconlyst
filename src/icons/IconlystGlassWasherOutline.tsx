import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassWasherOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M11.771 17.59c-.31 0-.6-.2-.71-.51l-2.57-7.53c-.13-.39.08-.82.47-.95s.82.08.95.47l2.57 7.53a.753.753 0 0 1-.71.99"
    />
    <Path
      fill={props.color}
      d="M6.811 16.45a1.7 1.7 0 0 1-1.51-.94L2.651 8.2c-.38-.75-.06-1.77.76-2.18 5.38-2.76 12.3-2.76 17.69 0 .81.42 1.14 1.43.73 2.26l-2.58 7.15c-.44.9-1.41 1.25-2.24.87-.43-.2-1.52-.38-2.25-.51-.28-.05-.53-.09-.71-.13a.75.75 0 1 1 .29-1.47c.17.04.41.07.67.12.9.15 2.01.34 2.62.62.08.04.19 0 .24-.09l2.58-7.15c.08-.17.05-.3-.03-.34-4.96-2.55-11.36-2.55-16.32 0-.08.04-.12.16-.07.26l2.65 7.31s.12.06.21.01c.73-.33 2.06-.62 4.06-.86.41-.05.79.24.84.65s-.24.79-.65.84c-2.27.28-3.22.56-3.62.74-.23.1-.46.15-.7.15z"
    />
    <Path
      fill={props.color}
      d="M12.261 20.05c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M15.89 11.87c-.33 0-.62-.22-.72-.53-.1-.34-.36-.6-.7-.7a.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.34-.1.6-.36.7-.7.1-.32.39-.53.72-.53s.62.22.72.53c.1.34.36.6.7.7.32.1.53.39.53.72s-.22.62-.53.72c-.34.1-.6.36-.7.7a.75.75 0 0 1-.72.53M12.801 8.61a.749.749 0 1 1-.002-1.502.749.749 0 0 1 .002 1.502"
    />
  </Svg>
);
export default IconlystGlassWasherOutline;
