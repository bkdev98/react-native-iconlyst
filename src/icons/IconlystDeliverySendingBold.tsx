import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySendingBold = ({
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
      d="m14.08 9.085 1.728.89 1.077-6.716a.3.3 0 0 0-.249-.344l-3.528-.564a.3.3 0 0 0-.344.248L11.681 9.32l1.938-.309a.75.75 0 0 1 .46.074"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.482 5.305c-.78-1.07-1.97-1.77-3.44-2.01h-.02l-.312-.052a.3.3 0 0 0-.345.249l-1.243 7.743c-.04.24-.18.44-.4.55-.21.11-.47.11-.68 0l-2.43-1.25-2.72.43q-.12.015-.24 0c-.15-.03-.3-.1-.41-.21a.74.74 0 0 1-.21-.65l1.252-7.743a.3.3 0 0 0-.249-.344l-.333-.053c-.34-.05-.67-.08-.99-.08-1.6 0-2.97.66-3.9 1.83-.02-.01-.05-.01-.08-.01h-2.58c-.41 0-.75.34-.75.75 0 .19.07.36.18.49.14.16.35.26.57.26h2.58c.23 0 .43-.1.57-.26.12.13.18.3.18.48 0 .42-.33.75-.75.75h-.808a.28.28 0 0 0-.277.214q-.02.097-.035.196l-.17 1.08h-.25c-.42 0-.75.34-.75.75a.75.75 0 0 0 .75.75h3.32c.22 0 .43-.1.57-.26.11.13.18.3.18.48 0 .42-.34.75-.75.75-1.07 0-2.141-.009-3.212-.01a.3.3 0 0 0-.297.254l-.19 1.236h-.81c-.41 0-.75.34-.75.75 0 .19.07.36.18.49.14.16.35.26.57.26h3.58c.22 0 .43-.1.57-.26.11.13.18.3.18.48 0 .42-.34.75-.75.75H3.671a.3.3 0 0 0-.297.256l-.013.084c-.25 1.57.02 2.99.78 4.13.77 1.15 2 1.9 3.54 2.15h.02l8.32 1.33c3.11.5 5.56-1.36 6.08-4.61l1.26-7.84c.25-1.62-.06-3.14-.88-4.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliverySendingBold;
