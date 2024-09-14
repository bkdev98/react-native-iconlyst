import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlayingBold = ({
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
      d="M19.454 12.468c-.269-.763-.523-1.484-.237-3.022.26-1.395-.094-2.942-.969-4.246-.958-1.426-2.436-2.388-4.16-2.71-3.719-.692-6.769 1.843-7.29 4.644-.287 1.54-.784 2.121-1.31 2.736-.51.598-1.037 1.216-1.296 2.616-.319 3.133 2.354 4.255 7.078 5.135 1.591.296 2.974.482 4.141.482 2.301 0 3.763-.725 4.32-2.766.254-1.36-.016-2.127-.277-2.869M14.46 19.091h-4.24a.752.752 0 0 0-.584 1.22 3.45 3.45 0 0 0 2.7 1.315 3.46 3.46 0 0 0 2.71-1.317.75.75 0 0 0-.585-1.218"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtonePlayingBold;
