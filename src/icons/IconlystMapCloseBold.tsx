import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapCloseBold = ({
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
      d="M20.938 3.24c-.51-.33-1.15-.38-1.71-.13l-2.993 1.327-.067.103v6.97c.85-.36 1.79-.56 2.78-.56a7.2 7.2 0 0 1 2.068.303.567.567 0 0 0 .732-.545V4.75c0-.61-.3-1.17-.81-1.51M7.685 2.733 3.836 4.434a2.67 2.67 0 0 0-1.584 2.44v12.663a1.79 1.79 0 0 0 2.522 1.64l2.998-1.333a.11.11 0 0 0 .065-.1V2.834a.11.11 0 0 0-.152-.1M9.486 2.673a.11.11 0 0 0-.148.107v16.87c0 .05.02.09.07.1.22.078.979.358 1.859.678.422.154.867-.22.759-.654a7.078 7.078 0 0 1 2.642-7.384V4.63c0-.04-.03-.08-.07-.1-.548-.2-4.305-1.561-5.112-1.857M20.989 14.99a.81.81 0 0 0-1.147 0l-1.658 1.659-1.658-1.658a.81.81 0 1 0-1.147 1.147l1.658 1.658-1.658 1.658a.81.81 0 1 0 1.147 1.147l1.658-1.658 1.658 1.658a.81.81 0 1 0 1.147-1.147l-1.658-1.658 1.658-1.658a.81.81 0 0 0 0-1.147"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapCloseBold;
