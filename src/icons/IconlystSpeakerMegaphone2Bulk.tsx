import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone2Bulk = ({
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
      d="m6.79 15.635-1.56-.42.33 2.9c.18 1.13.64 1.99 1.35 2.47.44.3.94.45 1.52.45.27 0 .55-.04.85-.1 2.7-.61 4.74-.15 5-.04.38.16.82-.02.98-.4a.75.75 0 0 0-.4-.98c-.67-.28-3.08-.68-5.91-.05-.51.11-.91.08-1.2-.12-.47-.32-.64-1.05-.7-1.43z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.98 2.965c-.15 0-.29.01-.43.05h-.03l-.602.124C14.656 3.607 6.873 5.216 5.74 5.495c-1.68.42-3.49 2.44-3.49 4.95 0 2.27 1.46 4.12 2.98 4.77l1.56.42c2.199.477 6.904 1.449 9.31 1.946l1.47.304c.05.01.1.02.15.01.09.02.17.03.26.03 2.15 0 3.77-3.22 3.77-7.48s-1.62-7.48-3.77-7.48"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.83 16.405c.05.01.1.02.15.02.95 0 2.27-2.28 2.27-5.98s-1.32-5.98-2.27-5.98q-.09 0-.18.03c-.93.26-2.09 2.48-2.09 5.95s1.16 5.69 2.09 5.95c.01.01.02.01.03.01"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone2Bulk;
