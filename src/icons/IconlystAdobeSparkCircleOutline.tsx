import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeSparkCircleOutline = ({
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
      d="M8.5 14.878c-.53 0-1.05-.1-1.46-.27a.75.75 0 0 1-.4-.98c.16-.38.6-.56.98-.4.52.22 1.51.21 1.96-.12.12-.09.23-.22.2-.53-.03-.25-.15-.44-.65-.66l-.97-.4c-.35-.15-1.42-.6-1.56-1.87-.09-.78.19-1.45.79-1.9.94-.7 2.49-.71 3.44-.31.38.16.56.6.4.98a.75.75 0 0 1-.98.4c-.52-.22-1.51-.21-1.96.12-.12.09-.23.22-.2.53.03.26.15.44.65.66l.97.4c.35.15 1.41.6 1.56 1.87.09.78-.19 1.46-.79 1.91-.54.4-1.27.58-1.98.58zM13.23 16.83c-.41 0-.75-.34-.75-.75v-5.72c0-.35.24-.65.57-.73.23-.06 2.26-.52 3.49.45.39.31.87.9.87 1.93s-.47 1.63-.86 1.95c-.75.6-1.81.68-2.57.63v1.49c0 .41-.34.75-.75.75m.75-3.74c.54.04 1.25.01 1.63-.3.13-.1.3-.3.3-.77s-.17-.66-.29-.75c-.38-.3-1.1-.31-1.64-.26v2.09z"
    />
  </Svg>
);
export default IconlystAdobeSparkCircleOutline;
