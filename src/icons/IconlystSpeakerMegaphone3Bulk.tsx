import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone3Bulk = ({
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
      d="M17.507 3.528c.92.94 1.73 2.32 2.3 3.88.5 1.37.76 2.74.76 3.94 0 .18-.01.35-.02.52-.11 1.52-.7 2.54-1.65 2.89-.06.02-.12.04-.19.05-.05.02-.1.03-.15.04-.01.01-.02.01-.03.01-.172.027-2.088.308-4.243.613l-.003-.002-4.54.658q-.304.036-.615.08c-.556.08-1.121.16-1.674.119-1.426-.17-3.085-1.256-3.735-3.058-.77-2.1.14-4.33 1.41-5.19.748-.5 5.426-3.388 7.68-4.78l1.15-.71c.02-.01.04-.02.05-.03.12-.08.25-.14.38-.19.95-.34 2.06.07 3.12 1.16m1.54 8.23c.08-1.09-.16-2.49-.65-3.83-.49-1.35-1.2-2.57-1.96-3.36-.51-.52-1.01-.82-1.37-.82-.06 0-.12.01-.17.03-.03.01-.06.03-.09.05a.2.2 0 0 0-.06.04c-.62.51-.85 2.64.13 5.34.49 1.35 1.21 2.57 1.97 3.35.6.61 1.19.92 1.53.79.35-.13.61-.74.67-1.59"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.047 11.758c.08-1.09-.16-2.49-.65-3.83-.49-1.35-1.2-2.57-1.96-3.36-.51-.52-1.01-.82-1.37-.82-.06 0-.12.01-.17.03-.03.01-.06.03-.09.05a.2.2 0 0 0-.06.04c-.62.51-.85 2.64.13 5.34.49 1.35 1.21 2.57 1.97 3.35.6.61 1.19.92 1.53.79.35-.13.61-.74.67-1.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m7.783 16.336 1.285 3.53a2.86 2.86 0 0 0 5.376-1.956l-.852-2.342-1.516.22.959 2.635a1.36 1.36 0 0 1-.813 1.743h-.001a1.36 1.36 0 0 1-1.743-.813L9.323 16.18l-.197.027c-.445.063-.897.127-1.343.13"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone3Bulk;
