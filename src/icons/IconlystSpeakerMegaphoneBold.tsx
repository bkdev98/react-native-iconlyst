import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphoneBold = ({
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
      d="M17.85 15.41c-.9 0-2.21-2.27-2.21-5.83 0-3.34 1.15-5.54 2.04-5.8.06-.02.11-.03.17-.03.9 0 2.2 2.27 2.2 5.83s-1.3 5.83-2.2 5.83m-7.52 3.22a1.626 1.626 0 0 1-3.25 0v-3.92c.84.18 2 .43 3.25.69zm7.52-16.38c-.14 0-.28.01-.42.05h-.04c-.42.09-10.24 2.11-11.51 2.43-1.65.41-3.43 2.38-3.43 4.86 0 2.31 1.57 4.2 3.13 4.75v4.29a3.126 3.126 0 0 0 6.25 0v-2.91c2.73.56 5.4 1.11 5.61 1.15h.02c.04.01.09.02.13.02h.04c.07.02.15.02.22.02 2.11 0 3.7-3.15 3.7-7.33s-1.59-7.33-3.7-7.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphoneBold;
