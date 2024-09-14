import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeIndesignCircleOutline = ({
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
      d="M14.38 15.982c-.75 0-1.62-.14-2.28-.65-.42-.33-.93-.96-.93-2.07s.5-1.75.92-2.09c.84-.67 2.04-.73 2.87-.68v-1.73c0-.41.34-.75.75-.75s.75.34.75.75v6.31c0 .35-.24.65-.57.73-.13.03-.75.17-1.52.17zm.11-4c-.53 0-1.1.08-1.45.36-.15.12-.36.35-.36.91s.2.77.35.89c.46.36 1.32.36 1.94.3v-2.44c-.15-.01-.31-.02-.48-.02M8.28 15.83c-.41 0-.75-.34-.75-.75V8.77c0-.41.34-.75.75-.75s.75.34.75.75v6.31c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAdobeIndesignCircleOutline;
