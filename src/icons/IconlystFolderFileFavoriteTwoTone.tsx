import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileFavoriteTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.366 20.987c3.355 0 5.332-1.978 5.332-5.332l.027-4.656c0-3.423-1.242-5.135-4.606-5.135h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.71-.856H8.311c-3.355 0-4.587 1.977-4.587 5.328v7.313c0 3.354 1.98 5.332 5.344 5.332z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.963 10.43.779 1.564a.27.27 0 0 0 .2.147l1.743.252c.07.008.134.045.176.102a.26.26 0 0 1-.028.347l-1.262 1.22a.25.25 0 0 0-.076.235l.303 1.722a.266.266 0 0 1-.22.3q-.092.014-.173-.027l-1.551-.813a.26.26 0 0 0-.25 0l-1.561.818a.274.274 0 0 1-.363-.11c-.027-.052-.036-.111-.027-.169l.302-1.722a.26.26 0 0 0-.076-.235L9.61 12.84a.264.264 0 0 1 0-.374.3.3 0 0 1 .152-.074l1.742-.253a.27.27 0 0 0 .202-.148l.777-1.563a.265.265 0 0 1 .359-.12.28.28 0 0 1 .121.12"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFolderFileFavoriteTwoTone;
