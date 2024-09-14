import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDaiBold = ({
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
      d="M17.17 12.005c0 .158-.03.306-.044.46h.258a.75.75 0 0 1 0 1.5h-.634c-.734 1.645-2.364 2.769-4.312 2.769H9.252a.75.75 0 0 1-.75-.75v-2.02H7.72a.75.75 0 0 1 0-1.5h.78v-.92h-.78a.75.75 0 0 1 0-1.5h.78v-2.02a.75.75 0 0 1 .75-.75h3.187c1.948 0 3.579 1.126 4.312 2.77h.634a.75.75 0 0 1 0 1.5h-.258c.014.155.045.303.045.46M12 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.438 8.774h-2.436v1.271h5.007a3.2 3.2 0 0 0-2.571-1.27M10.002 15.234h2.436a3.2 3.2 0 0 0 2.57-1.27h-5.006zM10.002 12.465h5.624c.02-.151.045-.302.045-.46s-.024-.31-.045-.46h-5.624z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDaiBold;
