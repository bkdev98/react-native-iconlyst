import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterCircleOutline = ({
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
      d="M12.614 21.75c-5.38 0-9.75-4.37-9.75-9.75s4.37-9.75 9.75-9.75 9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M8.534 13.92c-1.36 0-2.48-1.01-2.51-2.27-.04-1.92 1.72-3.66 1.92-3.86.29-.27.73-.28 1.03 0 .21.19 2.02 1.91 2.06 3.83.01.58-.21 1.13-.63 1.56-.47.48-1.14.75-1.84.75h-.03zm-1.01-2.29c0 .44.49.77 1.03.79.31 0 .59-.11.78-.3.09-.1.21-.26.2-.48-.02-.76-.57-1.61-1.05-2.19-.45.58-.97 1.42-.96 2.17zM16.214 12.98c-1.35 0-2.47-1-2.49-2.24-.04-1.88 1.69-3.59 1.88-3.78.29-.27.74-.28 1.03 0 .2.19 1.98 1.87 2.02 3.75.01.57-.21 1.12-.62 1.54-.46.47-1.12.73-1.81.73zm-.99-2.26c0 .41.46.76.99.76.29 0 .56-.1.74-.29.09-.09.2-.25.19-.46-.01-.73-.55-1.55-1.01-2.11-.44.56-.93 1.37-.92 2.09zM12.774 18.41c-1.36 0-2.49-1.01-2.51-2.26-.04-1.91 1.71-3.62 1.9-3.81.29-.27.73-.28 1.02 0 .2.19 2 1.89 2.04 3.79.01.57-.21 1.12-.62 1.54-.46.47-1.13.74-1.83.74m-.08-4.41c-.45.57-.95 1.39-.93 2.12 0 .43.47.79 1.01.79.3 0 .57-.11.76-.29.09-.09.2-.25.2-.46-.01-.75-.56-1.59-1.03-2.15z"
    />
  </Svg>
);
export default IconlystWaterCircleOutline;
