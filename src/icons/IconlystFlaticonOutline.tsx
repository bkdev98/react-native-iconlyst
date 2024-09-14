import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlaticonOutline = ({
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
      d="M11.766 20.555c-.53 0-1.06-.19-1.5-.57-.32-.28-.54-.67-1-1.43l-.02-.03-2.47-4.2-4.2-7.14c-.45-.78-.46-1.71 0-2.49a2.45 2.45 0 0 1 2.15-1.24h10.7c.27 0 .52.14.65.38.13.23.13.52 0 .75l-2.03 3.5c-.13.23-.38.37-.65.37h-4.74l.52.86h2.86c.27 0 .53.15.66.39s.12.53-.03.76l-1.44 2.24 3.03 5.05c.14.23.14.53 0 .76-.46.79-.69 1.18-1 1.46-.45.39-.98.58-1.51.58zm-1.22-2.79.02.03c.34.57.56.95.7 1.07.31.27.7.27 1.02 0 .1-.09.25-.33.47-.71l-3.04-5.07a.75.75 0 0 1 .01-.79l.95-1.48h-1.91c-.26 0-.51-.14-.64-.36l-1.42-2.36a.74.74 0 0 1 0-.76c.13-.24.38-.38.65-.38h5.63l1.16-2h-9.4c-.51 0-.77.34-.85.49-.09.15-.26.54 0 .99 1.39 2.38 2.79 4.76 4.19 7.14l2.47 4.2z"
    />
    <Path
      fill={props.color}
      d="M15.086 16.783c-.26 0-.5-.13-.64-.35l-2.06-3.29a.75.75 0 0 1 0-.79l5.16-8.55c.14-.22.38-.36.64-.36h1.08c.92 0 1.73.48 2.18 1.28.45.81.42 1.75-.07 2.53-1.91 3.05-3.72 6.02-5.65 9.16-.14.22-.38.36-.64.36zm-1.18-4.05 1.17 1.87c1.7-2.77 3.33-5.43 5.03-8.14.19-.31.2-.69.03-1.01a.98.98 0 0 0-.86-.51h-.66l-4.7 7.79z"
    />
  </Svg>
);
export default IconlystFlaticonOutline;
