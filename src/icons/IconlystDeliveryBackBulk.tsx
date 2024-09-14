import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBackBulk = ({
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
      d="M12.315 20.35a2.5 2.5 0 0 1-.301-.365c-.084-.129-.17-.258-.23-.405 0-.02-.01-.04-.02-.06-.03-.07-.06-.15-.08-.23a4 4 0 0 1-.09-.47c-.02-.23-.01-.48.04-.71l.06-.24c.11-.39.32-.75.62-1.05l1.94-1.95c.312-.31.69-.532 1.09-.645a.35.35 0 0 0 .241-.235 2.51 2.51 0 0 1 2.39-1.77h.98c.683 0 1.33.156 1.907.437.215.104.482-.044.482-.282l-.01-4.365c-.01-1.64-.56-3.09-1.55-4.08-.94-.93-2.23-1.43-3.72-1.43h-.338a.3.3 0 0 0-.3.3l.019 7.84c0 .24-.11.47-.31.61-.19.14-.44.18-.67.1l-2.6-.84-2.62.86c-.07.03-.15.04-.23.04-.16 0-.31-.05-.44-.14a.77.77 0 0 1-.31-.61l-.01-7.84a.3.3 0 0 0-.3-.3h-.34c-3.15.01-5.26 2.22-5.26 5.51v.02l.02 7.94c0 1.59.49 2.96 1.42 3.95.96 1.02 2.28 1.56 3.84 1.56h.03l5.067-.009a.3.3 0 0 0 .212-.512z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.628 9.007a.75.75 0 0 1 .466 0l1.849.6-.013-6.802a.3.3 0 0 0-.3-.3l-3.575.009a.3.3 0 0 0-.3.3l.009 6.808zM18.951 13.974h-.972a.75.75 0 0 0 0 1.5h.972c.658 0 1.194.534 1.194 1.189a1.2 1.2 0 0 1-1.194 1.2h-3.09l.697-.7a.75.75 0 0 0-1.062-1.06l-1.943 1.952a.74.74 0 0 0-.217.54c0 .006-.004.012-.004.019 0 .248.13.458.316.595l1.85 1.846a.75.75 0 0 0 1.06-.001.75.75 0 0 0 0-1.061l-.63-.63h3.023a2.7 2.7 0 0 0 2.694-2.7 2.695 2.695 0 0 0-2.694-2.69"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBackBulk;
