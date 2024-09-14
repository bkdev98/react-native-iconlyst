import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCircleUpOutline = ({
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
      fillRule="evenodd"
      d="M18.388 6.166A8.25 8.25 0 1 0 6.721 17.834 8.25 8.25 0 0 0 18.388 6.166M5.66 5.106c3.808-3.808 9.981-3.808 13.789 0s3.808 9.98 0 13.788-9.981 3.808-13.789 0-3.807-9.98 0-13.788"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.555 5.25a.75.75 0 0 1 .75.75v.915a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75m4.773 1.977a.75.75 0 0 1 0 1.06l-.647.647a.75.75 0 0 1-1.06-1.06l.646-.647a.75.75 0 0 1 1.06 0m-9.546 0a.75.75 0 0 1 1.06 0l.647.647a.75.75 0 0 1-1.06 1.06l-.647-.646a.75.75 0 0 1 0-1.06M5.805 12a.75.75 0 0 1 .75-.75h.914a.75.75 0 1 1 0 1.5h-.914a.75.75 0 0 1-.75-.75m11.085 0a.75.75 0 0 1 .75-.75h.915a.75.75 0 1 1 0 1.5h-.915a.75.75 0 0 1-.75-.75m-7.4 3.066a.75.75 0 0 1 0 1.06l-.647.647a.75.75 0 1 1-1.061-1.06l.647-.647a.75.75 0 0 1 1.06 0m6.13 0a.75.75 0 0 1 1.06 0l.648.646a.75.75 0 0 1-1.061 1.06l-.647-.646a.75.75 0 0 1 0-1.06m-3.065 1.27a.75.75 0 0 1 .75.75V18a.75.75 0 1 1-1.5 0v-.915a.75.75 0 0 1 .75-.75M12.555 9.953a2.047 2.047 0 1 0 0 4.094 2.047 2.047 0 0 0 0-4.094M9.008 12a3.547 3.547 0 1 1 7.094 0 3.547 3.547 0 0 1-7.094 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunCircleUpOutline;
