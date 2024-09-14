import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLampBulk = ({
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
      fillRule="evenodd"
      d="M12.233 17.387a.49.49 0 0 0-.47 0l-1.45.75-.68 3a1 1 0 0 0 .97 1.23h2.79c.31 0 .59-.14.78-.38s.26-.55.19-.85l-.67-3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M20.633 9.257c.02.16.02.33 0 .5a1.7 1.7 0 0 1-.27.71c-.07.1-.14.2-.23.28l-2.64 2.54c-.12.11-.17.27-.15.42l.64 3.58c.03.22.02.44-.03.64v.02c-.15.66-.69 1.18-1.39 1.31-.22.03-.45.02-.67-.03l-.12-.03c-.1-.03-.19-.07-.28-.12l-.87-.45-.61-.32-1.78-.92a.49.49 0 0 0-.47 0l-1.79.92-.87.45-.6.32c-.06.03-.13.06-.2.08-.01 0-.02.01-.03.01-.18.07-.37.1-.56.1-.61 0-1.21-.33-1.51-.9-.05-.09-.09-.19-.13-.3-.02-.06-.03-.13-.04-.19-.03-.19-.04-.38 0-.58l.62-3.59a.5.5 0 0 0-.14-.42l-2.65-2.53c-.1-.1-.19-.21-.25-.33a1 1 0 0 1-.12-.22c-.09-.2-.13-.42-.14-.65-.01-.24.03-.47.12-.68q.06-.135.15-.27c.05-.08.11-.16.19-.23.05-.06.11-.11.16-.15.24-.2.54-.33.85-.37l3.64-.53a.5.5 0 0 0 .38-.26l1.63-3.27c.17-.32.42-.58.74-.73a1.61 1.61 0 0 1 1.19-.15c.12.03.24.07.35.13.01 0 .03 0 .04.01.31.17.57.42.73.74h.01l1.63 3.27a.5.5 0 0 0 .37.26l3.65.53c.33.05.64.19.88.4.09.07.17.15.23.24.17.23.29.49.34.76"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarLampBulk;
