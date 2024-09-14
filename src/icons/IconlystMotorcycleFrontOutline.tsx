import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMotorcycleFrontOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.28 3.885a.75.75 0 0 1 .75-.75h1.722c1.007 0 1.636.814 1.863 1.498.092.277.23.482.392.615.155.126.37.219.688.219a.75.75 0 0 1 0 1.5c-.643 0-1.198-.2-1.636-.557-.43-.35-.707-.819-.868-1.305a.9.9 0 0 0-.228-.372c-.086-.078-.156-.098-.211-.098H6.03a.75.75 0 0 1-.75-.75M14.885 4.633c.227-.684.856-1.498 1.863-1.498h1.721a.75.75 0 0 1 0 1.5h-1.72c-.056 0-.126.02-.212.098a.9.9 0 0 0-.228.372c-.161.486-.439.955-.868 1.305-.438.358-.993.557-1.636.557a.75.75 0 0 1 0-1.5c.318 0 .533-.093.688-.22.163-.132.3-.337.392-.614M5.803 11.168a2.75 2.75 0 0 1 2.68-3.369h2.179a.75.75 0 0 1 0 1.5h-2.18a1.25 1.25 0 0 0-1.218 1.531l1.41 6.107c.13.567.635.969 1.218.969h.757a.75.75 0 1 1 0 1.5h-.757a2.75 2.75 0 0 1-2.68-2.132zM13.112 8.55a.75.75 0 0 1 .75-.75h2.253a2.75 2.75 0 0 1 2.68 3.368l-1.41 6.106a2.75 2.75 0 0 1-2.68 2.132h-.85a.75.75 0 0 1 0-1.5h.85a1.25 1.25 0 0 0 1.219-.97l1.41-6.106a1.25 1.25 0 0 0-1.219-1.53h-2.253a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 6.19a1.194 1.194 0 1 0 0 2.387 1.194 1.194 0 0 0 0-2.387M9.557 7.383a2.694 2.694 0 1 1 5.387 0 2.694 2.694 0 0 1-5.387 0M9.927 16.341a2.323 2.323 0 1 1 4.646 0v3.97a2.323 2.323 0 0 1-4.646 0zm2.323-.822a.823.823 0 0 0-.823.822v3.97a.823.823 0 1 0 1.646 0v-3.97a.823.823 0 0 0-.823-.822"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMotorcycleFrontOutline;
